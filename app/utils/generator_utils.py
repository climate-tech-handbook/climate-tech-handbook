import csv
import os, re
import requests
import yaml
import openai
import pdb
import json


def to_snake_case(string):
    return string.lower().replace(" ", "_")


def save_progress(progress):
    with open("progress.txt", "w") as f:
        f.write(str(progress))


def load_progress():
    try:
        with open("progress.txt", "r") as f:
            return int(f.read().strip())
    except FileNotFoundError:
        return 0


def list_models():
    models = openai.Model.list()
    print(models.data)


def stage_content(yml_files, csv_files, template_files, output_dir):
    """
    Stages the content required for content generation.

    Args:
        yml_files (list/str): List of YAML files or a single YAML file containing prompts.
        csv_files (list/str): List of CSV files or a single CSV file containing file information.
        template_files (list/str): List of template files or a single template file containing the content structure.
        output_dir (str): Directory path to store the generated content.

    Returns:
        tuple: A tuple containing prompts, file_info, and templates.
    """

    # Convert single input files to lists for uniform processing
    if not isinstance(yml_files, list):
        yml_files = [yml_files]
    if not isinstance(csv_files, list):
        csv_files = [csv_files]
    if not isinstance(template_files, list):
        template_files = [template_files]

    # Create output directory if it doesn't exist
    try:
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
    except FileExistsError:
        return 0

    # Initialize data structures
    prompts = {}
    file_info = []
    templates = {}

    # Load prompts from YAML files
    for yml_file in yml_files:
        with open(yml_file) as f:
            prompts.update(yaml.safe_load(f))

    # Load file information from CSV files
    for csv_file in csv_files:
        with open(csv_file, newline="") as f:
            reader = csv.DictReader(f)
            file_info.extend([row for row in reader])

    # Load templates from template files
    for template_file in template_files:
        template_name = os.path.splitext(os.path.basename(template_file))[0]
        with open(template_file) as f:
            templates[template_name] = f.read()

    return prompts, file_info, templates


def generate_completion(
    api_key, prompt, engine, temp, max_tokens, n, stop, freq_pen, pres_pen
):
    """
    Generates content completion using the OpenAI API.

    Args:
        api_key (str): Your OpenAI API key.
        prompt (str): The text prompt for content generation.
        engine (str): The OpenAI engine to use for content generation.
        temp (float): The temperature for controlling randomness in the output.
        max_tokens (int): The maximum number of tokens in the generated output.
        n (int): The number of completions to generate.
        stop (str): A string that, if encountered, stops content generation.
        freq_pen (float): The penalty for using less frequent tokens.
        pres_pen (float): The penalty for using tokens that are less contextually relevant.

    Returns:
        str: Generated content completion, or None if an error occurs.
    """
    openai.api_key = api_key

    try:
        response = openai.Completion.create(
            engine=engine,
            prompt=prompt,
            max_tokens=max_tokens,
            n=n,
            stop=stop,
            temperature=temp,
            frequency_penalty=freq_pen,
            presence_penalty=pres_pen,
        )

        return response.choices[0].text.strip()
    except Exception as e:
        print(f"Error generating completion: {e}")
        return None


def validate_and_assign(content_generator, prompts, file_info, templates):
    if prompts is not None:
        content_generator.prompts = prompts
    else:
        raise FileNotFoundError(
            f"Could not load prompts from '{content_generator.yml_file}'"
        )

    if file_info is not None:
        content_generator.file_info = file_info
    else:
        raise FileNotFoundError(
            f"Could not load file info from '{content_generator.csv_file}'"
        )

    if templates is not None:
        content_generator.templates = templates
    else:
        raise FileNotFoundError(
            f"Could not load template from '{content_generator.template_md}'"
        )


def generate_content(generator, prompt):
    if generator.request_count < generator.max_requests:
        completion = generator.create_completion(prompt)
        generator.request_count += 1
        return completion
    else:
        return "Max requests reached. No more content will be generated."


async def generate_output(generator, page, template_name="template"):
    """
    Asynchronously generates the output content using a given generator and page.

    Args:
        generator (ContentGenerator): The content generator object.
        page (dict): A dictionary containing the page information.
        template_name (str, optional): The name of the template to use. Defaults to "template".

    Returns:
        str: The generated output content.
    """
    prompt_keys = generator.extract_prompt_keys(template_name)
    generator.prompts = {
        to_snake_case(k): v
        for k, v in generator.prompts.items()
        if k.lower() != "topic"
    }

    print(f"{prompt_keys}")
    completions = []
    
    # Generate content completions for each prompt key
    for key in prompt_keys:
        key = key.lower()
        if key == "topic":  # Skip if the key is 'topic'
            continue
        prompt = generator.prompts[key]["prompt"].replace("{Topic}", page["Topic"])
        completion = generate_content(generator, prompt)
        completions.append(completion)

    # Create a dictionary with keys and their corresponding completions
    keys_and_completions = {
        key: completion.strip() for key, completion in zip(prompt_keys, completions)
    }
    # Add the 'topic' key to the dictionary
    keys_and_completions["topic"] = page["Topic"]

    print(generator.templates.keys())
    # Format the output using the keys and completions dictionary
    output = generator.templates[template_name].format(**keys_and_completions)

    return output



# adding new markdown content to a file at a specified line or range of lines
def edit_file(file_path, markdown, start_line=None, end_line=None):
    with open(file_path, "r+") as file:
        lines = file.readlines()
        if start_line and end_line:
            lines[start_line - 1 : end_line] = [f"{markdown}\n"]
        else:
            lines.append(f"{markdown}\n")
        file.seek(0)
        file.writelines(lines)


# takes a list of tags as input and inserts them at the top of the markdown file.
def add_tags(directory_path, formatted_tags):
    with open(directory_path, 'r+') as file:
        content = file.read()
        new_content = f"notes_we_will_be_covering:\n{formatted_tags}\n\n{content}"
        file.seek(0)
        file.write(new_content)
import os
import glob
def add_contents(file_path, yaml_front_matter):
    with open(file_path, 'r+') as file:
        file_content = file.read()
        new_content = f"---\n{yaml_front_matter}\n---\n\n{file_content}"
        file.seek(0)
        file.write(new_content)




# takes the path to the image file, its caption, and its position in the markdown file as input, and inserts an image tag at that position.
def insert_image(file_path, image_path, caption, position):
    with open(file_path, "r+") as file:
        lines = file.readlines()
        lines.insert(position, f"![{caption}]({image_path})\n")
        file.seek(0)
        file.writelines(lines)


# takes the header text and its position in the markdown file as input, and inserts a new section with a header and an empty body at that position
def add_section(file_path, header_text, position):
    with open(file_path, "r+") as file:
        lines = file.readlines()
        lines.insert(position, f"## {header_text}\n\n")
        file.seek(0)
        file.writelines(lines)

def remove_tags(file_path, tag_name):
    with open(file_path, 'r') as file:
        content = file.readlines()

    with open(file_path, 'w') as file:
        tag_section_found = False
        for line in content:
            if line.startswith(tag_name + ":"):
                tag_section_found = True
            elif tag_section_found and line.strip() == "":
                tag_section_found = False
            elif not tag_section_found:
                file.write(line)


def delete_image(file_path, image_path, caption):
    with open(file_path, 'r+') as file:
        lines = file.readlines()
        image_tag = f"![{caption}]({image_path})"
        
        # Edit each line
        for i, line in enumerate(lines):
            if image_tag in line:
                lines[i] = line.replace(image_tag, "")
                
        # Write back to file
        file.seek(0)
        file.writelines(lines)
        file.truncate()

def remove_all_contents(file_path):
    with open(file_path, 'r') as file:
        content = file.readlines()

    with open(file_path, 'w') as file:
        yaml_section_found = False
        for line in content:
            if line.strip() == "---":
                if not yaml_section_found:
                    yaml_section_found = True
                else:
                    # Skip writing the existing YAML section
                    yaml_section_found = False
            elif not yaml_section_found:
                file.write(line)

# def update_title_position(file_path):
#     with open(file_path, 'r') as file:
#         content = file.readlines()

#     # Find the line with the title
#     title_line = next((line for line in content if line.startswith('#')), None)

#     if title_line:
#         # Remove the title line from the content
#         content.remove(title_line)

#         # Get the new title from the content
#         new_title = title_line.strip().lstrip('#').strip()

#         # Replace the original title with the new title
#         for i, line in enumerate(content):
#             if line.startswith('title:'):
#                 content[i] = f'title: {new_title}\n'
#                 break

#     with open(file_path, 'w') as file:
#         file.writelines(content)

def update_title_position(file_path):
    with open(file_path, 'r') as file:
        content = file.readlines()

    if content:
        # Get the original title from the first line
        original_title = content[0].strip().lstrip('#').strip()

        # Adding front matter format
        front_matter = '---\n'
        front_matter += f'title: {original_title}\n'
        front_matter += '---\n'

        # Replace the first line (title) with front matter
        content[0] = front_matter

    with open(file_path, 'w') as file:
        file.writelines(content)



# update author and tags to correct format
def update_yaml_front_matter(file_path):
    with open(file_path, 'r') as file:
        content = file.read()
        # Find the start and end positions of the YAML front matter
        start_index = content.find('---\n') + 4
        end_index = content.find('\n---', start_index)
        yaml_front_matter = content[start_index:end_index]

        # Parse the YAML front matter
        data = yaml.safe_load(yaml_front_matter)

        # Update the author and tags
        authors = ['  - {}'.format(author) for author in data.get('authors', [])]
        tags = ['  - {}'.format(tag) for tag in data.get('tags', [])]

        # Construct the updated YAML front matter
        updated_yaml_front_matter = yaml.dump(data, sort_keys=False).strip()
        if 'authors' in updated_yaml_front_matter:
            updated_yaml_front_matter = updated_yaml_front_matter.replace(
                'authors:', 'authors:\n{}'.format('\n'.join(authors)), 1
            )
        if 'tags' in updated_yaml_front_matter:
            updated_yaml_front_matter = updated_yaml_front_matter.replace(
                'tags:', 'tags:\n{}'.format('\n'.join(tags)), 1
            )

        # Replace the original YAML front matter with the updated one
        updated_content = content[:start_index] + updated_yaml_front_matter + content[end_index:]

    # Write the updated content back to the file
    with open(file_path, 'w') as file:
        file.write(updated_content)


def remove_yaml_front_matter(file_path):
    # Read the content of the file
    with open(file_path, 'r') as file:
        content = file.read()

    # Find the start and end positions of the YAML front matter
    start_index = content.find('---\n')
    end_index = content.find('\n---', start_index)

    if start_index != -1 and end_index != -1:
        # Remove the YAML front matter block
        updated_content = content[:start_index] + content[end_index+4:]
        
        # Write the updated content back to the file
        with open(file_path, 'w') as file:
            file.write(updated_content)
    else:
        # No YAML front matter block found, do nothing
        return



def delete_fields_except_title(file_path):
    with open(file_path, 'r') as file:
        content = file.readlines()

        # Find the start and end positions of the YAML front matter
        start_index = -1
        end_index = -1
        for i, line in enumerate(content):
            if line.strip() == '---':
                if start_index == -1:
                    start_index = i
                else:
                    end_index = i
                    break

        if start_index == -1 or end_index == -1:
            print("YAML front matter not found in the file.")
            return

        yaml_front_matter = content[start_index+1:end_index]

        # Parse the YAML front matter
        data = yaml.safe_load('\n'.join(yaml_front_matter))

        # Remove all fields except for 'title'
        data = {'title': data.get('title', '')}

        # Construct the updated YAML front matter
        updated_yaml_front_matter = ['---']
        updated_yaml_front_matter.extend(yaml.safe_dump(data).splitlines())
        updated_yaml_front_matter.append('---')

        # Replace the original YAML front matter with the updated one
        updated_content = content[:start_index]
        updated_content.extend(updated_yaml_front_matter)
        updated_content.extend(content[end_index:])

    # Write the updated content back to the file
    with open(file_path, 'w') as file:
        file.write(''.join(updated_content))


    


def extract_keys_from_template(template_path):
    with open(template_path, "r") as f:
        content = f.read()
    keys = []
    for key in re.findall(r"\{(.*?)\}", content):
        if key.lower() != "topic":
            keys.append(key)
    return keys

