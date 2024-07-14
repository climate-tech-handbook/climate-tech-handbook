Here's how this updated script works:
We import the necessary libraries, including requests for making API calls.
We define a PERPLEXITY_API_KEY variable. You need to replace this with your actual Perplexity API key.
The call_perplexity_api function is added to handle API requests to Perplexity. It takes a prompt as input and returns the generated content.
In the process_file function, we use the Perplexity API to generate content for various sections of the markdown file. We make separate API calls for each section to get specific information.
The generated content is then used to fill in the template.
The rest of the script remains largely the same, processing each markdown file in the specified folder.
To use this script:
Replace 'your_api_key_here' with your actual Perplexity API key.
Replace /path/to/your/docs/folder with the actual path to your docs folder.
Make sure you have the requests library installed (pip install requests).
Run the script.
This script will process each markdown file, using the Perplexity API to generate content for various sections. The API calls are designed to provide specific information about each climate solution.
Note that this script makes multiple API calls for each file, which may take some time and could incur costs depending on your API usage limits. You might want to add error handling and rate limiting to manage API requests more effectively.
Also, remember to review and potentially edit the generated content to ensure accuracy and relevance to your specific needs. The AI-generated content should be a starting point that you can further refine and customize.