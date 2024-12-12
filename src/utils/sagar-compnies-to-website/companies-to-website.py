import os
import pandas as pd

# Define paths
csv_file_path = "Climate Tech Resources database - Sagar's company list.csv"
md_files_directory = "../../../docs/"

# Load the CSV data and filter companies
df = pd.read_csv(csv_file_path)
df_filtered = df[df['Gemini Drawdown Solution'].notnull()]

# Function to generate markdown file path
def get_md_file_path(solution_name):
  """
  Generates the expected .md filename from the solution name.
  """
  sanitized_name = solution_name.lower().replace(' ', '-').replace('(', '').replace(')', '')\
                                 .replace('’', '').replace('‘', '')
  return os.path.join(md_files_directory, f"solution-{sanitized_name}.md")

# Loop through filtered companies
for index, row in df_filtered.iterrows():
  solution_name = row["Gemini Drawdown Solution"]
  md_file_path = get_md_file_path(solution_name)

  # Read markdown content
  try:
    with open(md_file_path, 'r') as file:
      md_content = file.read()
  except FileNotFoundError:
    print(f"File not found: {md_file_path}")
    continue

  # Markers for company section
  start_marker_1 = "#### Example Organizations"
  start_marker_2 = "### Example Companies"
  start_marker = start_marker_1
  start_index = md_content.find(start_marker_1)

  if(start_index == -1):
    start_index = md_content.find(start_marker_2)
    start_marker = start_marker_2
  else:
    start_marker = start_marker_1

  if start_index == -1:
    print(f"Neither start marker '{start_marker_1}' nor '{start_marker_2}' not found in: {md_file_path}")
    continue

  # Generate new company list in markdown format
  new_companies = ""
  name = row["company-name"]
  desc = row["company-description"]
  href = row["company-card-desktop href"]
  new_companies += f"\n- [{name}]({href}) - {desc}"

  # Insert the new companies after the start marker
  updated_md_content = md_content[:start_index + len(start_marker)] + new_companies + md_content[start_index + len(start_marker):]

  # Write updated content back to file
  with open(md_file_path, 'w') as file:
    file.write(updated_md_content)
  print(f"Updated company in: {md_file_path}")