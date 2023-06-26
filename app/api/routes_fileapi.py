from flask import Flask, request, jsonify,abort,g,current_app
from api import fileapi_bp
import sys, os
sys.path.append(os.path.abspath(os.path.dirname(__file__)))
from utils.utils import get_env_vars, create_generator, get_generator
import pdb


@fileapi_bp.before_request
def check_generator():
    try:
        g.generator=current_app.Climate_Tech_Handbook
        g.reqgenerator=get_generator(request.get_json())
        #first element of tuple is generator 
        if g.reqgenerator[0]:
            g.generator=g.reqgenerator[0]
        else:
            abort(400,"Requested generator could not be loaded!")
    except Exception as e:
        abort(400,str(e))

@fileapi_bp.route('/edit_file', methods=['POST'])
async def edit_file_endpoint():
    # get the file path and markdown content from the request data
    data = request.get_json()
    try:
        file_path = data['file_path']
        markdown = data['markdown']
        start_line = data['start_line']
        end_line = data['end_line']

        # call the edit_file function
        g.generator.edit_file(file_path, markdown, start_line, end_line)
        # generate and write output
        # output = await Climate_Tech_Handbook.create_output(file_path)
        # await Climate_Tech_Handbook.write_output(file_path, output)
        # return a response indicating success
        return jsonify({'message': 'File edited successfully'})
    except Exception as e:
        abort(400,str(e))

@fileapi_bp.route('/add_tags', methods=['POST'])
def add_tags_endpoint():
    # get the file path and tags from the request data
    data = request.get_json()
    # file_path = data['file_path']
    tags = data['tags']

     # print the file path for debugging purposes
    # print("file path:", file_path)
    # import os
    file_path = os.path.join(os.getcwd(),'output', 'solution-abandoned-farmland-restoration.md')
    print("file path:", file_path)

   
    #Climate_Tech_Handbook.add_tags(file_path, tags)
    g.generator.add_tags(file_path, tags)
    # return a response indicating success
    return jsonify({'message': 'Tags added successfully'})

@fileapi_bp.route('/insert_image', methods=['POST'])
def insert_image_endpoint():
    # get the file path, image path, caption, and position from the request data
    data = request.get_json()
    file_path = data['file_path']
    image_path = data['image_path']
    caption = data['caption']
    position = data['position']

    # generator = create_generator(yml_files, csv_files, template_mds, output_dir)
    # if g.reqgenerator:
    #     generator=g.reqgenerator
    # call the insert_image function
    #global Climate_Tech_Handbook  # access the global variable
    #Climate_Tech_Handbook.insert_image(file_path, image_path, caption, position)
    g.generator.insert_image(file_path, image_path, caption, position)
    # return a response indicating success
    return jsonify({'message': 'Image inserted successfully'})

@fileapi_bp.route('/add_section', methods=['POST'])
def add_section_endpoint():
    # get the file path, header text, and position from the request data
    data = request.get_json()
    file_path = data['file_path']
    header_text = data['header_text']
    position = data['position']

    # call the add_section function
    # global Climate_Tech_Handbook  # access the global variable
    # Climate_Tech_Handbook.add_section(file_path, header_text, position)
    g.generator.add_section(file_path, header_text, position)
    # return a response indicating success
    return jsonify({'message': 'Section added successfully'})


