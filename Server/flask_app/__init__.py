from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_app.config.env import DB_CONNECTION



# create the extension
db = SQLAlchemy()
# create the app
app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = DB_CONNECTION
# initialize the app with the extension
db.init_app(app)
