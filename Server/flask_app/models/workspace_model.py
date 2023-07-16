from flask_app import db
from flask_app.models.user_model import User 

class Workspace(db.Model):
  __tablename__ = "workspaces"
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(50), nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey(User.id), nullable=False)