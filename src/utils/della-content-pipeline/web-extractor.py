import pandas as pd
import requests
from bs4 import BeautifulSoup, NavigableString
import pandas as pd

df = pd.read_csv('webscraper.csv', encoding='ISO-8859-1')

# Define a function to scrape content from a website
def scrape_content(website):
    # Check if the website is a valid URL
    if pd.isna(website) or not isinstance(website, str):
        return "Invalid URL or missing data"

    try:
        # Send a request and get the response
        response = requests.get(website)
        # Check if the request was successful
        if response.status_code == 200:
            # Parse the HTML content using BeautifulSoup
            soup = BeautifulSoup(response.content, "html.parser")
            # Find the main content of the article
            content = soup.find("div", class_="body markup")
            if content:
                article_content = ''
                for child in content.descendants:
                    if isinstance(child, NavigableString) and not child.find_parent('a'):
                        article_content += child.strip() + ' '
                return article_content.strip()
            else:
                return "Content section not found."
        else:
            # Return a message if the request failed
            return f"Failed to retrieve content, status code: {response.status_code}"
    except requests.exceptions.RequestException as e:
        # Handle any exceptions that occur during the request
        return f"Request exception: {e}"

# Assuming df is your DataFrame and it has a column named "Website"
# Apply the function to the website column and create a new column for the scraped content
df["Description"] = df["Website"].apply(scrape_content)

# Print the DataFrame
print(df.head())  # Print the first few rows for brevity
