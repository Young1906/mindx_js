from flask import Flask, Blueprint, request, jsonify, url_for, redirect, render_template, flash 
from ..model import * 
import uuid
from .. import db

upload_bp = Blueprint("upload", __name__)

@upload_bp.route("/", methods=["GET", "POST"])
def f_upload():
    if request.method=="POST":
        try:
            # Saving file
            _file = request.files["file"]
            file_ext = _file.filename.split(".")[-1]
            filename = f"{str(uuid.uuid4())}.{file_ext}"

            _file.save(f"app/static/imgs/{filename}")

            # Saving meta
            cat = Cat(
                cat_name= request.form.get("catName"),
                description= request.form.get("catDesc"),
                rating=1000,
                img_name=f"/static/imgs/{filename}",
                view=0,
                dislike=0,
                like=0,
                superlike=0
            )

            db.session.add(cat)
            db.session.commit()
            flash("Upload success")
        except Exception as e:
            flash(str(e))
        finally:
            return redirect(request.url)

    return render_template("upload.html")
