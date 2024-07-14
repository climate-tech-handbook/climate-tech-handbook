import os
from pathlib import Path
import re
from api_call import get_enhanced_content

def create_template():
    # (Template creation code here, similar to before but with placeholders for API-generated content)
    pass

def format_title(filename):
    return filename.replace('solution-', '').replace('.md', '').replace('-', ' ').title()

def process_file(filename, template):
    title = format_title(filename)
    
    with open(filename, 'r') as file:
        content = file.read()
    
    summary = extract_summary(content)
    
    # Get enhanced content from API
    enhanced_content = get_enhanced_content(title)
    
    # Fill in the template
    new_content = template.format(
        title=title,
        summary=summary,
        image_filename=f"{filename.replace('.md', '.jpg')}",
        slack_channel=title.lower().replace(' ', '-'),
        slack_channel_id="CHANNEL_ID_HERE",
        climatebase_query=title.replace(' ', '+'),
        **enhanced_content
    )
    
    with open(filename, 'w') as file:
        file.write(new_content)

def extract_summary(content):
    match = re.search(r'# .*?\n\n(.*?)\n\n', content, re.DOTALL)
    return match.group(1) if match else "Summary to be added."

def main():
    template = create_template()
    docs_folder = Path('/path/to/your/docs/folder')  # Replace with your actual path
    
    for filename in docs_folder.glob('solution-*.md'):
        if filename.name != 'solution-reduced-food-waste.md':
            print(f"Processing {filename.name}")
            process_file(filename, template)

if __name__ == "__main__":
    main()