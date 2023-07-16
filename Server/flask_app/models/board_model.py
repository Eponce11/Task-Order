from flask_app import db
from flask_app.models.workspace_model import Workspace

class Board(db.Model):
  __tablename__ = "boards"
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(40), nullable=False)
  workspace_id = db.Column(db.Integer, db.ForeignKey(Workspace.id), nullable=False)

  @staticmethod
  def serialize_one(data):
    return {
      'id': data.id,
      'title': data.title,
      'workspace_id': data.workspace_id
    }