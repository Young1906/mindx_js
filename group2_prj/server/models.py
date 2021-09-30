from . import db 

class Cat(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    cat_name = db.Column(db.String(50))
    cat_desc = db.Column(db.String(255))
    rating = db.Column(db.Float)
    view = db.Column(db.Integer)
    dislike = db.Column(db.Integer)
    like = db.Column(db.Integer)
    superlike = db.Column(db.Integer)
    img_data = db.Column(db.String)


    def __repr__(self) -> str:
        return super().__repr__()