from flask import json, request
from flask_app import app, db
from flask_app.models.user_model import User


@app.route('/api/user/get_one', methods=['POST'])
def get_one():
  return json.dumps({"Msg": "Success"})

@app.route('/api/user/create', methods=['POST'])
def create_user():
  data = json.loads(request.data)
  print(data)
  return json.dumps({"Msg": "Success"})