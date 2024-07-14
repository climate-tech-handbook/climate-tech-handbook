import requests
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

PERPLEXITY_API_KEY = os.getenv("PERPLEXITY_API_KEY")

def call_perplexity_api(prompt):
    url = 'https://api.perplexity.ai/chat/completions'
    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {PERPLEXITY_API_KEY}'
    }
    body = {
        "model": "pplx-7b-online",
        "stream": False,
        "max_tokens": 1024,
        "temperature": 0.7,
        "messages": [
            {"role": "system", "content": "You are a helpful assistant providing information about climate solutions."},
            {"role": "user", "content": prompt}
        ]
    }
    
    response = requests.post(url, headers=headers, json=body)
    if response.status_code == 200:
        return response.json()['choices'][0]['message']['content']
    else:
        print(f"Error: {response.status_code}")
        return None

def get_enhanced_content(title):
    prompts = {
        "overview": f"Provide three key points about {title} as a climate solution.",
        "environmental_impact": f"Describe the environmental impact of {title} in three points.",
        "solutions": f"List three solutions each for production, distribution, and consumption related to {title}.",
        "companies": f"Name and describe five innovative companies working on {title}.",
        "case_studies": f"Provide two case studies related to {title}.",
        "policies": f"List three policy measures or regulations related to {title}.",
        "economic_benefits": f"Describe three economic benefits of implementing {title}.",
        "challenges": f"List three challenges in implementing {title}.",
        "best_path": f"Suggest five steps for the best path forward in implementing {title}.",
        "resources": f"Provide three resources for further reading about {title}."
    }
    
    enhanced_content = {}
    for key, prompt in prompts.items():
        enhanced_content[key] = call_perplexity_api(prompt)
    
    return enhanced_content