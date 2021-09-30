from . import db

class Cat(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cat_name = db.Column(db.String)
    description = db.Column(db.String)
    rating = db.Column(db.Integer)
    img_name = db.Column(db.String)
    view = db.Column(db.Integer)
    dislike = db.Column(db.Integer)
    like = db.Column(db.Integer)
    superlike = db.Column(db.Integer)
