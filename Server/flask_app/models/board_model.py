from flask_app import db

class Board(db.model):
  __tablename__ = "boards"
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(40), nullable=False)