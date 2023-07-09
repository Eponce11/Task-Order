from flask_app import db

class Workspace(db.model):
  __tablename__ = "workspaces"
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(), nullable=False)