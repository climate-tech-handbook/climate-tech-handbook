#!/usr/bin/env python
# coding: utf-8

# In[18]:


""" Get episodes from Volts """
import requests
import csv

# Your podcast ID
podcast_id = '1586892518'

# iTunes Search API endpoint with the podcast ID and entity type set to podcast episode
api_url = f'https://itunes.apple.com/lookup?id={podcast_id}&entity=podcastEpisode&limit=200'

# Make a request to the iTunes Search API
response = requests.get(api_url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the response as JSON
    data = response.json()

    # This will hold all the episode URLs and descriptions
    episodes_data = []
    
    # Check if 'results' is in data and is a list
    if 'results' in data and isinstance(data['results'], list):
        # Loop through the 'results' list
        for item in data['results']:
            # Check if the item is an episode
            if item.get('kind') == 'podcast-episode':
                # Add the episode URL and description to the list
                episodes_data.append((item['trackViewUrl'], item.get('description', ''),item.get('trackName', '')))
    
    # Save the URLs and descriptions to a CSV file
    with open('volts_episode_urls.csv', 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['URL', 'Description', 'Name'])  # Write header row
        writer.writerows(episodes_data)  # Write data rows
    
    print(f"{len(episodes_data)} episode URLs and descriptions have been extracted and saved to volts_episode_urls.csv")

else:
    print('Failed to retrieve data:', response.status_code)


# In[3]:


data


# In[19]:


""" Get Degrees url - Apple podcast """

import requests
import csv

# Your podcast ID
podcast_id = '1536627537'

# iTunes Search API endpoint with the podcast ID and entity type set to podcast episode
api_url = f'https://itunes.apple.com/lookup?id={podcast_id}&entity=podcastEpisode&limit=200'

# Make a request to the iTunes Search API
response = requests.get(api_url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the response as JSON
    data = response.json()

    # This will hold all the episode URLs and descriptions
    episodes_data = []
    
    # Check if 'results' is in data and is a list
    if 'results' in data and isinstance(data['results'], list):
        # Loop through the 'results' list
        for item in data['results']:
            # Check if the item is an episode
            if item.get('kind') == 'podcast-episode':
                # Add the episode URL and description to the list
                episodes_data.append((item['trackViewUrl'], item.get('description', ''), item.get('trackName', '')))
    
    # Save the URLs and descriptions to a CSV file
    with open('degrees_episode_urls.csv', 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['URL', 'Description', 'Name'])  # Write header row
        writer.writerows(episodes_data)  # Write data rows
    
    print(f"{len(episodes_data)} episode URLs and descriptions have been extracted and saved to degrees_episode_urls.csv")

else:
    print('Failed to retrieve data:', response.status_code)


# In[17]:


""" Format URLs """
# Format the URLs as https://embed.podcasts.apple.com/us/podcast/the-future-of-natural-gas/id1593204897?i=1000544414574
# to embed in website with a elegant display

# Define the function to format the URLs
def format_podcast_url(url):
    # Add 'embed.' before 'podcasts.apple.com'
    formatted_url = url.replace('https://podcasts.apple.com', 'https://embed.podcasts.apple.com')

    # Split the URL to remove the 'uo' parameter
    parts = formatted_url.split('&')
    formatted_url = '&'.join(part for part in parts if not part.startswith('uo='))

    return formatted_url

file_path = 'volts_episode_urls.csv' # Your file path volts_episode_urls.csv

# Read the CSV file and store the data
with open(file_path, 'r', newline='') as file:
    reader = csv.reader(file)
    # Skip the header
    header = next(reader)
    # Read and process each row
    episodes_data = [(format_podcast_url(row[0]), row[1]) for row in reader]

# Save the formatted URLs back to the CSV file
with open(file_path, 'w', newline='') as file:
    writer = csv.writer(file)
    # Write the header
    writer.writerow(header)
    # Write the updated data
    writer.writerows(episodes_data)

print(f"Formatted URLs have been updated in {file_path}")


# In[12]:


data


# In[21]:


import csv

# Function to format the podcast URL
def format_podcast_url(url):
    # Add 'embed.' before 'podcasts.apple.com'
    formatted_url = url.replace('https://podcasts.apple.com', 'https://embed.podcasts.apple.com')
    # Split the URL to remove the 'uo' parameter
    parts = formatted_url.split('&')
    formatted_url = '&'.join(part for part in parts if not part.startswith('uo='))
    return formatted_url

# Path to the original file
file_path = 'degrees_episode_urls.csv'

# Read the CSV file, format the URLs, and collect the data
with open(file_path, 'r', newline='') as file:
    reader = csv.reader(file)
    header = next(reader)  # Reading the header
    episodes_data = [[format_podcast_url(row[0])] + row[1:] for row in reader]

# Path for the output file
output_file_path = 'degrees_episode_urls_formatted.csv'

# Save the formatted URLs back to a new CSV file
with open(output_file_path, 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(header)  # Writing the header
    writer.writerows(episodes_data)  # Writing the updated data


# In[ ]:




