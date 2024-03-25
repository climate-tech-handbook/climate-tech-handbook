#!/usr/bin/env python
# coding: utf-8

# In[ ]:


""" Request podcast episodes from Spotify """


# In[1]:


import requests

import time


# In[ ]:


# Get your token from Spotify

## Step 1: Get your credentials from Spotify 


# In[ ]:


## Step 2: Run the code below, replace with your own credentials ;)


# In[2]:


def get_spotify_access_token(client_id, client_secret):
    auth_url = 'https://accounts.spotify.com/api/token'
    auth_response = requests.post(auth_url, {
        'grant_type': 'client_credentials',
        'client_id': client_id,
        'client_secret': client_secret,
    })

    auth_response_data = auth_response.json()
    print(auth_response_data['access_token'])
    return auth_response_data['access_token']


# In[3]:


def get_podcast_episodes(access_token, show_id, limit=5, offset=0):
    api_url = f'https://api.spotify.com/v1/shows/{show_id}/episodes?limit={limit}&offset={offset}'
    headers = {
        'Authorization': f'Bearer {access_token}'
    }
    response = requests.get(api_url, headers = headers)
    return response.json()


# In[4]:


# User your client ID and client secret here
client_id = ''
client_secret = ''


# In[5]:


## Step 3: Get the token by calling function


# In[1]:


access_token = get_spotify_access_token(client_id, client_secret)


# In[6]:


# To retrieve all the episodes
def get_all_episodes(access_token, show_id, limit=50):
    episodes = []
    offset = 0
    total = None

    while total is None or offset < total:
        response = get_podcast_episodes(access_token, show_id, limit, offset)
        if 'items' in response: # 'items' is the key in JSON response
            episodes.extend(response['items']) # Add lists -> [50] + [50] +...
            offset += len(response['items'])
            total = response['total']

        else:
            print("Error fetching episodes")
            break
        time.sleep(1)
    return episodes


# In[23]:


all_episodes = get_all_episodes(access_token, '4C5Qx3wJn0GeTnDxIVYcAR') # the show's id
print(all_episodes)


# In[7]:


len(all_episodes)


# In[ ]:


## Step 4 - Let's turn the result into a csv file.
### Name | Overview | URL


# In[8]:


import csv

def write_episodes_to_csv(episodes, filename = 'your_file.csv'):
    with open(filename, mode='w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow(['Episode Name', 'Overview', 'URL'])

        for episode in episodes:
            name = episode.get('name', 'No Title')
            description = episode.get('description', 'No description')
            url = episode.get('external_urls',{}).get('spotify', 'No URL')
            writer.writerow([name, description, url])

write_episodes_to_csv(all_episodes)


# In[ ]:


# Since the total items are less than 200, we can use iTunes API
import requests
import csv  # Importing csv module to work with CSV files

# Your podcast ID
podcast_id = '1593204897'

# iTunes Search API endpoint with the podcast ID and entity type set to podcast episode
api_url = f'https://itunes.apple.com/lookup?id={podcast_id}&entity=podcastEpisode&limit=200'

# Make a request to the iTunes Search API
response = requests.get(api_url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the response as JSON
    data = response.json()

    # This will hold all the episode URLs
    episode_urls = []
    
    # Loop through the 'results' list
    for item in data['results']:
        # Check if the item is an episode
        if item.get('kind') == 'podcast-episode':
            # Add the episode URL to the list
            episode_urls.append(item['trackViewUrl'])
    
    # Output the URLs to the console
    for url in episode_urls:
        print(url)
    
    # Save the URLs to a CSV file
    with open('episode_urls.csv', 'w', newline='') as file:
        writer = csv.writer(file)
        for url in episode_urls:
            writer.writerow([url])
    
    print(f"{len(episode_urls)} episode URLs have been extracted and saved to episode_urls.csv")

else:
    print('Failed to retrieve data:', response.status_code)


# In[3]:


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




