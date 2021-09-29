from . import db

class Cat(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cat_name = db.Column(db.String)
    description = db.Column(db.String)
    rating = db.Column(db.String)
    img_name = db.Column(db.String)
    view = db.Column(db.String)
    dislike = db.Column(db.String)
    like = db.Column(db.String)
    superlike = db.Column(db.String)

