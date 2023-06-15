# from loader import requests

# Fetch an image from Unsplash based on the topic
# def fetch_unsplash_image(topic):
#     response = requests.get(
#         f"https://api.unsplash.com/search/photos?query={topic}&client_id={unsplash_access_key}"
#     )
#     data = response.json()
#     if data["results"]:
#         return (
#             data["results"][0]["urls"]["regular"],
#             data["results"][0]["user"]["links"]["html"],
#         )
#     else:
#         return None, None
import os
from models.content_generator import ContentGenerator
from utils.get_file_path import get_file_path
from flask import Flask, request, jsonify,g,current_app
import pdb,json


def get_env_vars(*keys, exit_on_missing=True):
    env_vars = []
    missing_vars = []
    for key in keys:
        value = os.getenv(key)
        if value is None:
            if key == "OPENAI_SECRET_KEY":
                print(
                    "Error: OPENAI_SECRET_KEY environment variable is not set. OpenAI key is needed to run this class."
                )
                exit(1)
            else:
                print(
                    f"Note: {key} unset. If you plan to interact with any necessary services related to this key, you will be unable."
                )
                missing_vars.append(key)
        env_vars = value

    if missing_vars and exit_on_missing:
        print("Exiting due to missing environment variables.")
        exit(1)

    return env_vars


def create_generator(yml_files, csv_files, template_mds, output_dir):
    api_key = get_env_vars("OPENAI_SECRET_KEY")
    content_generator = ContentGenerator(
        api_key,
        yml_files=yml_files,
        csv_files=csv_files,
        template_mds=template_mds,
        output_dir=output_dir,
    )
    return content_generator



def get_generator(data):
    absolute_path = os.path.dirname(__file__)
    
    full_path = get_file_path('generator.json')
    f = open(full_path, "r+")
    jsondata = json.loads(f.read())

    # Get the generator_data and generator_id from the provided data
    generator_data = data.get("generator_data")
    generator_id = data.get("generator_id")
    defaultgenerator=current_app.Climate_Tech_Handbook
    # If generator_id is provided, attempt to retrieve the generator from the GENERATORS dictionary
    if generator_id:
        existinggenerator=[gen for gen in jsondata if gen['generator_id']==generator_id]
        # If the generator is not found, return an error message and 404 status
        if not existinggenerator or len(existinggenerator)==0:
            return None, jsonify({"error": "Requested generator not found"}), 404
        else:
            generator_data=existinggenerator[0]["generator_data"]
            generator= create_generator(generator_data["yml_files"], generator_data["csv_files"], 
            generator_data["template_mds"], generator_data["output_dir"])

    # If generator_data is provided, create a new generator with the given configuration
    elif generator_data:
        yml_files = generator_data.get("yml_files", [])
        csv_files = generator_data.get("csv_files", [])
        template_mds = generator_data.get("template_mds", [])
        output_dir = generator_data.get("output_dir", "output")
        generator= create_generator(yml_files, csv_files,template_mds, output_dir)
        newgenerator={"generator_id":len(jsondata)+1,"generator_data":{
            "yml_files":yml_files,
            "csv_files":csv_files,
            "template_mds":template_mds,
            "output_dir":output_dir
        }}
        # If a generator_id is provided, store the newly created generator in the GENERATORS dictionary
        #jsondata.append(newgenerator)
        with f:
            jsondata.append(newgenerator)
            f.seek(0)
            json.dump(jsondata, f, 
                            indent=4,  
                            separators=(',',': '))
    # If neither generator_id nor generator_data are provided, use the Climate_Tech_Handbook instance by default
    else:
        try:
            generator = defaultgenerator
        except:
            print(f"Climate Tech Handbook default generator not initialized.")

    # Return the generator, None for the error message, and None for the status code
    return generator, None, None

