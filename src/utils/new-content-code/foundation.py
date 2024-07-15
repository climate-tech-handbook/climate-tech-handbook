import os
from pathlib import Path
import re
from api_call import get_enhanced_content
from dotenv import load_dotenv
import shutil
import logging

# Set up logging
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

# Load environment variables from .env file
env_path = Path(__file__).resolve().parent.parent / '.env'
load_dotenv(env_path)
logging.info(f"Loaded .env file from: {env_path}")

def create_template():
    template = '''---
title: {title}
displayed_sidebar: docSidebar
pagination_prev: solutions
---

# {title}: A Critical Climate Solution

{summary}

![{title} illustration](/../static/img/{image_filename})

:::company job openings
### [View open jobs in {title}](https://climatebase.org/jobs?l=&q=&drawdown_solutions={climatebase_query})
:::

## Overview

{overview_points}

## Environmental Impact

{environmental_impact}

## Solutions by Sector

### Production
{production_solutions}

### Distribution
{distribution_solutions}

### Consumption
{consumption_solutions}

## Innovative Technologies and Companies

{companies}

## Case Studies

{case_studies}

## Policy Measures and Regulations

{policies}

## Economic Benefits

{economic_benefits}

## Challenges and Best Path Forward

### Challenges
{challenges}

### Best Path Forward
{best_path}

## Resources and Further Reading

{resources}

'''
    return template

def format_title(filename):
    return filename.replace('solution-', '').replace('.md', '').replace('-', ' ').title()

def process_file(filename, template):
    title = format_title(filename.name)
    
    with open(filename, 'r') as file:
        content = file.read()
    
    summary = extract_summary(content)
    
    logging.info(f"Getting enhanced content for {title}")
    # Get enhanced content from API
    enhanced_content = get_enhanced_content(title)
    
    # Fill in the template
    new_content = template.format(
        title=title,
        summary=summary,
        image_filename=f"{filename.stem}.jpg",
        climatebase_query=title.replace(' ', '+'),
        **enhanced_content
    )
    
    with open(filename, 'w') as file:
        file.write(new_content)
    logging.info(f"Finished processing {filename}")

def extract_summary(content):
    match = re.search(r'# .*?\n\n(.*?)\n\n', content, re.DOTALL)
    return match.group(1) if match else "Summary to be added."

def main():
    logging.info(f"Current working directory: {os.getcwd()}")
    
    template = create_template()
    if template is None:
        logging.error("Failed to create template")
        return

    # Set the correct path to the docs folder
    docs_folder = Path(__file__).resolve().parent.parent.parent.parent / 'docs'
    
    if not docs_folder.exists():
        logging.error(f"Error: Docs folder does not exist at {docs_folder}")
        return
    
    logging.info(f"Docs folder found at: {docs_folder}")
    
    # List all files in the docs folder
    logging.info("Files in docs folder:")
    for file in docs_folder.iterdir():
        logging.info(file.name)
    
    output_folder = Path('./output')
    output_folder.mkdir(exist_ok=True)
    logging.info(f"Output folder created at: {output_folder.resolve()}")

    files_processed = 0
    
    for filename in docs_folder.glob('solution-*.md'):
        logging.info(f"Found file: {filename}")
        if filename.name != 'solution-reduced-food-waste.md':
            logging.info(f"Processing {filename.name}")
            
            output_file = output_folder / filename.name
            
            shutil.copy2(filename, output_file)
            logging.info(f"Copied {filename} to {output_file}")
            
            process_file(output_file, template)
            
            files_processed += 1
            if files_processed >= 3:
                break

    logging.info(f"Total files processed: {files_processed}")

if __name__ == "__main__":
    main()