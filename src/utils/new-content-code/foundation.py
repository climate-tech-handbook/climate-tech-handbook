import os
from pathlib import Path
import re
from api_call import get_enhanced_content
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def create_template():
    template = '''---
title: {title}
displayed_sidebar: docSidebar
pagination_prev: solutions
---

# {title}: A Critical Climate Solution

{summary}

![{title} illustration](/../static/img/{image_filename})

:::contribute Community
Join the discussion in the *[#{slack_channel}](https://workonclimate.slack.com/messages/{slack_channel_id})* channel on the [Work on Climate Slack](https://workonclimate.org)
:::

:::company job openings
### [View open jobs in {title}](https://climatebase.org/jobs?l=&q=&drawdown_solutions={climatebase_query})
:::

## Overview

- {overview_points}

## Environmental Impact

- {environmental_impact}

## Solutions by Sector

### Production
- {production_solutions}

### Distribution
- {distribution_solutions}

### Consumption
- {consumption_solutions}

## Innovative Technologies and Companies

1. **{company_1_name}**: {company_1_description}

2. **{company_2_name}**: {company_2_description}

3. **{company_3_name}**: {company_3_description}

4. **{company_4_name}**: {company_4_description}

5. **{company_5_name}**: {company_5_description}

## Case Studies

1. **{case_study_1_title}**: {case_study_1_description}

2. **{case_study_2_title}**: {case_study_2_description}

## Policy Measures and Regulations

1. {policy_1}
2. {policy_2}
3. {policy_3}

## Economic Benefits

- {economic_benefits}

## Challenges and Best Path Forward

### Challenges
- {challenges}

### Best Path Forward
1. {best_path_1}
2. {best_path_2}
3. {best_path_3}
4. {best_path_4}
5. {best_path_5}

## Resources and Further Reading

- {resources}

*Image credit: {image_credit}*
'''
    return template

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