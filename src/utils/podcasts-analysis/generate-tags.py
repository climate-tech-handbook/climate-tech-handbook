#!/usr/bin/env python
# coding: utf-8

# In[ ]:


""" generate sectors using csv file"""
""" Generate sectors for each episode using OpenAI's GPT-4 API. """


# In[ ]:


import pandas as pd
from openai import OpenAI

# Load your CSV file
df = pd.read_csv('csv/podcasts_overview.csv')

# Assuming you have your API key for OpenAI
client = OpenAI(api_key="")

def classify_overview(overview):
    try:
        # This code is for v1 of the openai package: pypi.org/project/openai
        response = client.chat.completions.create(
            model="gpt-4-1106-preview",
            messages=[
                {
                    "role": "user",
                    "content": f"For this content: \"{overview}\".\n Choose one tag for it. The tags are: \"Biochar Production,Bioplastics,Coastal Wetland Restoration,Distributed Energy Storage,Distributed Solar Photovoltaics,Efficient Aviation,Geothermal Power,Improved Manure Management,Multistrata Agroforestry,Onshore Wind Turbines,Reduced Food Waste,Solar Hot Water,Temperate Forest Restoration,Tropical Forest Restoration,Water Distribution Efficiency.\"\n\nJust response the tag name"
                }
            ],
            temperature=1,
            max_tokens=25,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0)

        return response.choices[0].message.content
    except Exception as e:
        print(f"Error: {e}")
        return "Error"

# Apply the function to each overview
df['Topic'] = df['Overview'].apply(classify_overview)

# Save the updated DataFrame to a new CSV file
df.to_csv('csv/updated_file_gpt4_new.csv', index=False)


# In[ ]:




