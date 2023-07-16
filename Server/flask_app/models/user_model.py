from flask_app import db, bcrypt
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User(db.Model):
  __tablename__ = "users"
  id = db.Column(db.Integer, primary_key=True)
  first_name = db.Column(db.String(40), nullable=False)
  last_name = db.Column(db.String(40), nullable=False)
  email = db.Column(db.String(50), unique=True, nullable=False)
  password = db.Column(db.String(60), nullable=False)
  workspaces = db.relationship('Workspace', backref='users', lazy=True)

  @staticmethod
  def create_user_validator(form_data):
    errors = {}
    
    if len(form_data['first_name']) < 2:
      errors['first_name'] = 'First Name must be at least 2 characters'
    
    if len(form_data['last_name']) < 2:
      errors['last_name'] = 'Last Name must be at least 2 characters'

    if not EMAIL_REGEX.match(form_data['email']):
      errors['email'] = 'Invalid email address'
    else:
      potential_email = db.session.execute(db.select(User).filter_by(email=form_data['email'])).scalar()
      if potential_email:
        errors['email'] = 'Email in use'
      
    if len(form_data['password']) < 8:
      errors['password'] = 'Password must be at least 8 characters'
    
    if not form_data['password'] == form_data['confirm_password']:
      errors['confirm_password'] = 'Must match password'

    return errors
  
  @staticmethod
  def login_validator(form_data):
    potential_user = db.session.execute(db.select(User).filter_by(email=form_data['email'])).scalar()

    if not potential_user:
      return False
    
    if not bcrypt.check_password_hash(potential_user.password, form_data['password']):
      return False

    return potential_user
