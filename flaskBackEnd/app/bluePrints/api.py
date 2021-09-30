from flask import Flask, request, jsonify, Blueprint
from ..model import Cat
from .. import db
from  sqlalchemy.sql.expression import func

getCat = Blueprint("getCat", __name__)

@getCat.route("/", methods=["GET"])
def f_getCat():
    cats = []

    for cat in Cat.query.order_by(func.random()).all():
        dcat = cat.__dict__
        del dcat["_sa_instance_state"]
        cats.append(dcat)
    return jsonify(cats)


@getCat.route("/view/<int:id>", methods=["POST"])
def f_view(id):
    cat = Cat.query.get(id)
    cat.view+=1;
    db.session.commit()

    return {"msg": cat.view}

@getCat.route("/dislike/<int:id>", methods=["POST"])
def f_dislike(id):
    cat = Cat.query.get(id)
    cat.dislike+=1;
    db.session.commit()

    return {"msg": cat.view}


@getCat.route("/like/<int:id>", methods=["POST"])
def f_like(id):
    cat = Cat.query.get(id)
    cat.like+=1;
    db.session.commit()

    return {"msg": cat.view}


@getCat.route("/superlike/<int:id>", methods=["POST"])
def f_superlike(id):
    cat = Cat.query.get(id)
    cat.superlike+=1;
    db.session.commit()

    return {"msg": cat.view}

@getCat.route("/elo", methods=["POST"])
def f_elo():
    prvCat = request.json["prvCat"]
    thisCat = request.json["thisCat"]
    
    r_prvCat = Cat.query.get(int(prvCat["id"]))
    r_thisCat = Cat.query.get(int(thisCat["id"]))

    # actual score of prvCat and thisCat
    if prvCat["score"] > thisCat["score"]:
        s_A = 1
        s_B = 0

    elif prvCat["score"] < thisCat["score"]:
        s_A = 0
        s_B = 1
    else:
        s_A = s_B = .5

    # Expected score of each cat base on there rating
    e_A = 1. / ( 1 + pow(10, (r_thisCat.rating - r_prvCat.rating)/400))
    e_B = 1. / ( 1 + pow(10, (r_prvCat.rating - r_thisCat.rating)/400))

    r_prvCat.rating += int(8 * ( s_A - e_A ))
    r_thisCat.rating += int(8 * ( s_B - e_B ))

    db.session.commit()
    
    return f"{r_thisCat.rating}, {r_prvCat.rating}", 200
