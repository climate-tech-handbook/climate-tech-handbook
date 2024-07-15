import requests
import os
from pathlib import Path
from dotenv import load_dotenv
import time
import logging

# Set up logging
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

# Load environment variables from .env file
env_path = Path(__file__).resolve().parent.parent / '.env'
load_dotenv(env_path)
logging.info(f"Loaded .env file from: {env_path}")

PERPLEXITY_API_KEY = os.getenv("PERPLEXITY_API_KEY")
if not PERPLEXITY_API_KEY:
    logging.error("PERPLEXITY_API_KEY not found in environment variables")
else:
    logging.info("PERPLEXITY_API_KEY loaded successfully")

def call_perplexity_api(prompt, max_retries=3, delay=5):
    url = 'https://api.perplexity.ai/chat/completions'
    headers = {
        'accept': 'application/json',
        'content-type': 'application/json',
        'authorization': f'Bearer {PERPLEXITY_API_KEY}'
    }
    payload = {
        "model": "mistral-7b-instruct",
        "messages": [
            {
                "role": "system",
                "content": "You are a helpful assistant providing information about climate solutions."
            },
            {
                "role": "user",
                "content": prompt
            }
        ]
    }
    
    for attempt in range(max_retries):
        try:
            logging.info(f"Sending API request. Attempt {attempt + 1} of {max_retries}")
            response = requests.post(url, json=payload, headers=headers)
            response.raise_for_status()
            logging.info("API request successful")
            return response.json()['choices'][0]['message']['content']
        except requests.exceptions.RequestException as e:
            logging.error(f"Error: {e}. Attempt {attempt + 1} of {max_retries}")
            if attempt < max_retries - 1:
                logging.info(f"Retrying in {delay} seconds...")
                time.sleep(delay)
            else:
                logging.error(f"Failed to get response after {max_retries} attempts.")
                return None

def get_enhanced_content(title):
    prompts = {
        "overview_points": f"Provide 3-5 brief, bullet-point key facts about {title} as a climate solution. Reference Project Drawdown or other reliable sources where possible.",
        "environmental_impact": f"List 3-5 bullet points on the environmental impact of {title}. Include specific data or statistics if available.",
        "solutions": f"Provide 3-5 bullet points each for production, distribution, and consumption solutions related to {title}. Focus on innovative approaches.",
        "companies": f"Name and briefly describe 5 innovative companies working on {title}. Include their main focus or technology.",
        "case_studies": f"Summarize 2 case studies related to {title} in 2-3 sentences each. Include specific outcomes or impacts.",
        "policies": f"List 3-5 bullet points of key policy measures or regulations related to {title}. Include examples of where they've been implemented if possible.",
        "economic_benefits": f"Provide 3-5 bullet points on the economic benefits of implementing {title}. Include specific figures or projections if available.",
        "challenges": f"List 3-5 bullet points of key challenges in implementing {title}.",
        "best_path": f"Suggest 5 brief, actionable steps for the best path forward in implementing {title}.",
        "resources": f"Provide 3-5 specific resources (e.g., reports, websites, organizations) for further reading about {title}. Include brief descriptions."
    }
    
    enhanced_content = {}
    for key, prompt in prompts.items():
        content = call_perplexity_api(prompt)
        enhanced_content[key] = content if content else f"Unable to generate content for {key}"
    
    return enhanced_content
    
    enhanced_content = {}
    for key, prompt in prompts.items():
        content = call_perplexity_api(prompt)
        enhanced_content[key] = content if content else f"Unable to generate content for {key}"
    
    return enhanced_content