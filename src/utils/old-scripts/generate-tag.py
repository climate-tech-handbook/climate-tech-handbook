import pandas as pd
from openai import OpenAI

# Function to classify the overview text
def classify_overview(overview):
    try:
        # Assuming you have set up the OpenAI client with your API key
        response = client.ChatCompletion.create(
            model="gpt-4-1106-preview",
            messages=[
                {
                    "role": "user",
                    "content": f"For this content: \"{overview}\".\nChoose one tag for it. The tags are: 'Biochar Production', 'Bioplastics', 'Coastal Wetland Restoration', 'Distributed Energy Storage', 'Distributed Solar Photovoltaics', 'Efficient Aviation', 'Geothermal Power', 'Improved Manure Management', 'Multistrata Agroforestry', 'Onshore Wind Turbines', 'Reduced Food Waste', 'Solar Hot Water', 'Temperate Forest Restoration', 'Tropical Forest Restoration', 'Water Distribution Efficiency.'\n\nJust response the tag name"
                }
            ],
            temperature=1,
            max_tokens=25,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0
        )
        # Extract the tag from the response
        tag = response.choices[0].message['content']
        return tag.strip()
    except Exception as e:
        print(f"Error: {e}")
        return "Error"

# Main execution block
if __name__ == "__main__":
    # Set up the OpenAI client with your API key
    client = OpenAI(api_key="your-api-key")  # Replace 'your-api-key' with your actual OpenAI API key

    # Load your CSV file
    df = pd.read_csv('csv/podcasts_overview.csv')

    # Apply the function to each overview and classify
    df['Topic'] = df['Overview'].apply(classify_overview)

    # Save the updated DataFrame to a new CSV file
    df.to_csv('csv/updated_file_gpt4.csv', index=False)

    print("Classification is done and the updated file is saved.")
