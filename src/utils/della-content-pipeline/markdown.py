import pandas as pd

data = pd.read_csv('webscraper.csv', encoding='ISO-8859-1')

# Create a new column 'Markdown Syntax'

data['Markdown Syntax'] = '- [' + data['Title'] + '](' + data['Website'] + ') - ' + data['Source']

# Print the DataFrame
print(data.head())  # Print the first few rows for brevity

