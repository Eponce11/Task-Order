from flask_app import db

class Board(db.Model):
  __tablename__ = "boards"
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(40), nullable=False)