from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_app.config.env import DB_CONNECTION

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = DB_CONNECTION
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

from flask_app.models.user_model import User


with app.app_context():
  db.create_all()




