from flask_app import db

class List(db.model):
  __tablename__ = "lists"
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(40), nullable=False)