from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_app.config.env import DB_CONNECTION, APP_SECRET
from flask_bcrypt import Bcrypt
from flask_cors import CORS

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = APP_SECRET

app.config["SQLALCHEMY_DATABASE_URI"] = DB_CONNECTION
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

CORS(app, origins=["http://localhost:3001","http://127.0.0.1:3001"])

from flask_app.models.user_model import User
from flask_app.models.board_model import Board

with app.app_context():
  db.create_all()




