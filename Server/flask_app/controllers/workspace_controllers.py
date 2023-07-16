from flask import json, request
from flask_app import app, db
from flask_app.models.workspace_model import Workspace

@app.route('/api/workspace/create', methods=['POST'])
def create_workspace():
  data = json.loads(request.data)
  workspace = Workspace(
    title = data['title'],
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

  allWorkSpaces = []
  for workspace in db_workspaces:
    allWorkSpaces.append({
      'id': workspace.id,
      'title': workspace.title,
      'user_id': workspace.user_id
    })
  
  return json.dumps(allWorkSpaces)