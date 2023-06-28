from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_app.config.env import DB_CONNECTION


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = DB_CONNECTION
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

class User(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  first_name = db.Column(db.String, nullable=False)
  last_name = db.Column(db.String, nullable=False)
  email = db.Column(db.String, unique=True, nullable=False)

with app.app_context():
  db.create_all()
