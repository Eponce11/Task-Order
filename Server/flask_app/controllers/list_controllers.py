from flask import json, request
from flask_app import app, db
from flask_app.models.list_model import List

# need validations
@app.route('/api/list/create', methods=['POST'])
def create_list():
  data = json.loads(request.data)

  list = List(
    title = data['title']
  )

  db.session.add(list)
  db.session.commit()

  response = {
    'Msg': 'Success'
  }

  return json.dumps(response)