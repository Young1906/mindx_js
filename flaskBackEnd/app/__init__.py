from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

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

    db.init_app(app)
    

    @app.route("/", methods=["GET"])
    def index():
        return render_template("index.html")
    
    from .bluePrints.api import getCat as getCat_bp
    app.register_blueprint(getCat_bp, url_prefix="/cat")

    return app
