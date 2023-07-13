from flask import json, request
from flask_app import app, db
from flask_app.models.board_model import Board


# Need to run validations
@app.route('/api/board/create', methods=['POST'])
def create_board():
  data = json.loads(request.data)

  # Run Validations

  board = Board(
    title = data['title']
  )

  db.session.add(board)
  db.session.commit()

  response = {
    'Msg': 'Success'
  }
  
  return json.dumps(response)