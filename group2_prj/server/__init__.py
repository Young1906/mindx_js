from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin


db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config["SECRET_KEY"] = "123"
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///api.sqlite"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)
    


    #Return all cat img
    from .cat_api import cat_api as cat_api_blueprint
    app.register_blueprint(cat_api_blueprint, url_prefix="/cat")

    return app