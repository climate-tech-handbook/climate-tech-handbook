from flask import jsonify
from api import api_bp


@api_bp.route("/hello")
def hello():
    return jsonify({"message": f"Hello, I am Flask!"})
