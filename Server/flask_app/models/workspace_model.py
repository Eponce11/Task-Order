from flask_app import db
from flask_app.models.user_model import User
import flask_app.models.board_model as board_import

class Workspace(db.Model):
  __tablename__ = "workspaces"
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(50), nullable=False)
  description = db.Column(db.String(200), nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey(User.id), nullable=False)
  boards = db.relationship('Board', backref='workspaces', lazy=True)

  @staticmethod
  def serialize_one(data):
    
    allBoards = []
    for board in data.boards:
      allBoards.append(board_import.Board.serialize_one(board))

    return {
      'id': data.id,
      'title': data.title,
      'description': data.description,
      'user_id': data.user_id,
      'boards': allBoards
    }

  @staticmethod
  def serialize_many(data):
    allWorkSpaces = []
    for workspace in data:
      allWorkSpaces.append(Workspace.serialize_one(workspace))
    return allWorkSpaces
