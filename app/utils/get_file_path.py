import os

def get_file_path(file_name):
    """
    Returns the full file path given a file name.
    """
    base_dir = os.path.abspath(os.path.dirname(__file__))
    return os.path.join(base_dir, file_name)
