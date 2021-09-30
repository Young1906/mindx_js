from flask import Blueprint, request, make_response, jsonify, after_this_request
import json
from flask.wrappers import Response

from werkzeug.wrappers import response 
from .models import Cat

cat_api = Blueprint("cat_api", __name__)
@cat_api.route("/", methods=["GET"])
def get_cat():
    data = []
    for cat in Cat.query.all():
        data.append({
            "id" : cat.id
            ,"cat_name" : cat.cat_name
            ,"cat_desc" : cat.cat_desc
            ,"rating" : cat.rating
            ,"view" : cat.view
            ,"dislike" : cat.dislike
            ,"like" : cat.like
            ,"superlike" : cat.superlike
            ,"img_data" : cat.img_data
        })

    @after_this_request
    def add_header(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

   
    return jsonify({"data": data})

@cat_api.route("/create", methods=["GET", "POST"])
def post_cat():
    return {"msg": 0}