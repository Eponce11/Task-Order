from flask import json, request
from flask_app import app, db, bcrypt
from flask_app.models.user_model import User


@app.route('/api/user/get_one', methods=['POST'])
def get_by_email():
  return json.dumps({"Msg": "Success"})

@app.route('/api/user/create', methods=['POST'])
def create_user():
  data = json.loads(request.data)
  errors = User.create_user_validator(data)

  if errors:
    return json.dumps(errors), 400

  hash_pw = bcrypt.generate_password_hash(data['password'])

  data['password'] = hash_pw

  user = User(
    first_name = data['first_name'],
    last_name = data['last_name'],
    email = data['email'],
    password = data['password']
  )
  
  db.session.add(user)
  db.session.commit()

  response = {
    'id': user.id,
    'firstName': user.first_name,
    'lastName': user.last_name
  }

  #need to get id

  return json.dumps(response)

@app.route('/api/user/login', methods=['POST'])
def login():
  data = json.loads(request.data)
  
  user = User.login_validator(data)

  if not user:
    return json.dumps({'error': 'Invalid Credentials'}), 400

  response = {
    'id': user.id,
    'firstName': user.first_name,
    'lastName': user.last_name
  }
  
  return json.dumps(response)