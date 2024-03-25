import os
import time
import requests
import csv
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

# Configurations
MAIN_URL = 'https://www.mcjcollective.com/media/podcast'  # The URL of the podcast collection
SAVE_DIR = 'your_save_directory'  # The directory to save files
HEAD_URL = 'https://www.mcjcollective.com'  # Base URL

# Ensure the save directory exists
os.makedirs(SAVE_DIR, exist_ok=True)

# Function to set up Selenium and fetch all links
def fetch_all_links():
    service = webdriver.ChromeService(executable_path='/opt/homebrew/bin/chromedriver')  # Update path as needed
    driver = webdriver.Chrome(service=service)
    driver.get(MAIN_URL)
    try:
        while True:
            load_more_button = WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CLASS_NAME, "loadMoreButton")))
            time.sleep(15)
            load_more_button.click()
            time.sleep(15)
    except TimeoutException:
        print("All 'Load More' buttons clicked or timed out.")
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    driver.quit()
    return [a['href'] for a in soup.find_all('a', class_='summary-read-more-link')]

# Function to scrape content from each link
def scrape_content(links, filename_suffix):
    podcast_data = []
    for index, link in enumerate(links):
        full_link = link if link.startswith('https://') else HEAD_URL + '/' + link.strip('/')
        time.sleep(5)  # Sleep to avoid being blocked for too many requests
        response = requests.get(full_link)
        detail_soup = BeautifulSoup(response.text, 'html.parser')
        title = detail_soup.title.text if detail_soup.title else 'No Title Found'
        scripts = detail_soup.find_all('p')
        overview = '\n'.join(script.text for script in scripts)
        podcast_data.append((title, full_link, overview))
        # Save the content to a file
        with open(os.path.join(SAVE_DIR, f"{title}_{filename_suffix}.txt"), 'w', encoding='utf-8') as file:
            file.write(overview)
    return podcast_data

# Function to save podcast data to CSV
def save_to_csv(podcast_data, filename):
    csv_filename = os.path.join(SAVE_DIR, filename)
    with open(csv_filename, 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(['Title', 'URL', 'Overview/Audio URL'])
        writer.writerows(podcast_data)
    print(f"Scraped content saved to {csv_filename}")

# Main execution
if __name__ == "__main__":
    # Fetch all podcast links
    all_links = fetch_all_links()

    # Scrape content from each link and save as text files
    podcast_overview_data = scrape_content(all_links, 'overview')

    # Save overview data to CSV
    save_to_csv(podcast_overview_data, 'podcasts_overview_data.csv')

    # Additional scraping can be added here following the same pattern
    # For example, scraping for audio URLs or other specific data
    # ... Add your additional scraping functions and calls here ...

    print("Script execution completed.")
