from flask import Flask, request, jsonify, Blueprint
from ..model import Cat


getCat = Blueprint("getCat", __name__)

@getCat.route("/", methods=["GET"])
def f_getCat():
    cats = []

    for cat in Cat.query.all():
        print(cat)

    return "msg"




