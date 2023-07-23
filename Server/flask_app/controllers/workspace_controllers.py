from flask import json, request
from flask_app import app, db
from flask_app.models.workspace_model import Workspace

@app.route('/api/workspace/create', methods=['POST'])
def create_workspace():
  data = json.loads(request.data)
  workspace = Workspace(
    title = data['title'],
    description = data['description'],
    user_id = data['user_id']
  )
  db.session.add(workspace)
  db.session.commit()

  response = {
    'Msg': 'Success'
  }

  return json.dumps(response)

@app.route('/api/workspace/get_all/<id>', methods=['GET'])
def get_all_workspace(id):
  db_workspaces = db.session.execute(db.select(Workspace).filter_by(user_id=id)).scalars()

  allWorkSpaces = Workspace.serialize_many(db_workspaces)
  
  return json.dumps(allWorkSpaces)