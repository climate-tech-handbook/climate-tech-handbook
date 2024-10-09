import os
import pandas as pd

# Load the CSV file
csv_file_path = './data/Companies_drawdown_to_website.csv'
md_files_directory = './docs/'  # Path to the directory containing .md files

df = pd.read_csv(csv_file_path)

# Generalized logic to process each solution
for solution_name in df['Predicted Drawdown Solution'].unique():
    # Filter the company names and URLs for the current solution
    company_list = df[df['Predicted Drawdown Solution'] == solution_name][['Company', 'Website']]

    # Generate the updated HTML with the company names and their URLs
    company_list_html = '\n'.join([f'<li><a href="{row["Website"]}" target="_blank">{row["Company"]}</a></li>' 
                                for _, row in company_list.iterrows()])
    
    # Generate the expected .md filename from the solution name
    # This matches your file naming convention (lowercase, hyphen-separated)
    md_file_name = f"""solution-{solution_name.lower().replace(' ', '-').replace('(', '').replace(')', '').replace('’', '').replace('‘', '')}.md"""
    md_file_path = os.path.join(md_files_directory, md_file_name)
    
    # Check if the file exists
    if not os.path.exists(md_file_path):
        print(f"File not found: {md_file_path}")
        continue  # Skip to the next solution if the file doesn't exist

    # Read the original .md file
    with open(md_file_path, 'r') as file:
        md_content = file.read()

    # Find the section where companies are listed and replace it with the updated list
    start_marker = "</details>"
    end_marker = ":::company job openings"
    
    # Identify the section that needs replacement
    start_index = md_content.find(start_marker)
    end_index = md_content.find(end_marker, start_index) + len(end_marker)

    if start_index == -1:
        start_marker = ".jpg)"
        start_index = md_content.find(start_marker)
    
    if start_index == -1:
        start_marker = ".png)"
        start_index = md_content.find(start_marker)
    
    if start_index == -1 or end_index == -1:
        print(f"Markers not found in: {md_file_path}")
        continue

    # Generate the new content for this section
    updated_company_section = f"""
{start_marker}
        <details>
            <summary>More companies working in this solution if you want to explore...</summary>
            <em>Note: this is an experimental AI feature. Accuracy and completeness are a work in progress</em>
            <div>
                <ul>
                {company_list_html}
                </ul>
            </div>
        </details>
"""

    # Replace the old company section with the new one
    updated_md_content = md_content[:start_index] + updated_company_section + md_content[end_index:]

    # Write the updated content back to the .md file
    with open(md_file_path, 'w') as file:
        file.write(updated_md_content)

    print(f"MD file updated successfully for solution: {solution_name}")