from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

def create_app():
    app = Flask(
        __name__,
        static_folder = "static",
        template_folder = "templates"
    )

    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///api.sqlite"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.secret_key = "secret"
    CORS(app)

    db.init_app(app)
    

    @app.route("/", methods=["GET"])
    def index():
        return render_template("index.html")

    from .bluePrints.api import getCat as getCat_bp
    app.register_blueprint(getCat_bp, url_prefix="/cat")

    from .bluePrints.upload import upload_bp
    app.register_blueprint(upload_bp, url_prefix="/upload")

    return app
