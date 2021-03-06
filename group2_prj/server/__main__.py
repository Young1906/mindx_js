# import os 
# from flask import Flask, flash, request, redirect, url_for
# from werkzeug.utils import secure_filename

# UPLOAD_FOLDER = "assets/imgs"
# ALLOWED_EXTENSIONS = {'jpg', 'jpeg', 'png'}

# app = Flask(__name__)
# app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

# def allowed_file(filename):
#     return '.' in filename and \
#            filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# @app.route('/', methods=['POST'])
# def upload_file():
#     if request.method == 'POST':
#         # check if the post request has the file part
#         if 'file' not in request.files:
#             flash('No file part')
#             return redirect(request.url)
            
#         file = request.files['file']
#         fn_ext = file.filename.split(".")[-1]
#         file_name = request.args.get("fn")
#         # rename the file 
#         file.filename = f"{file_name}.{fn_ext}"
        
#         # If the user does not select a file, the browser submits an
#         # empty file without a filename.
#         if file.filename == '':
#             flash('No selected file')
#             return redirect(request.url)
#         if file and allowed_file(file.filename):
#             filename = secure_filename(file.filename)
#             file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
#             # return redirect(url_for('download_file', name=filename))
#     return '''
#     <!doctype html>
#     <title>Upload new File</title>
#     <h1>Upload new File</h1>
#     <form method=post enctype=multipart/form-data>
#       <input type=file name=file>
#       <input type=submit value=Upload>
#     </form>
#     '''


# if __name__ == "__main__":
#     app.secret_key = "This is a key"
#     app.run(host="127.0.0.1",port=5000,debug=True)

from __init__ import create_app, db

app = create_app()

if __name__ == "__main__":
    db.create_all()
