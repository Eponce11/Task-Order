from flask_app import db
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User(db.Model):
  __tablename__ = "users"
  id = db.Column(db.Integer, primary_key=True)
  first_name = db.Column(db.String(40), nullable=False)
  last_name = db.Column(db.String(40), nullable=False)
  email = db.Column(db.String(50), unique=True, nullable=False)
  password = db.Column(db.String(60), nullable=False)

  @staticmethod
  def create_user_validator(formData):
    errors = {}
    
    if len(formData['first_name']) < 2:
      errors['first_name'] = 'First Name must be at least 2 characters'
    
    if len(formData['last_name']) < 2:
      errors['last_name'] = 'Last Name must be at least 2 characters'

    if not EMAIL_REGEX.match(formData['email']):
      errors['email'] = 'Invalid email address'
    else:
      potential_email = db.session.execute(db.select(User).filter_by(email=formData['email'])).scalar()
      if potential_email:
        errors['email'] = 'Email in use'
      
    if len(formData['password']) < 8:
      errors['password'] = 'Password must be at least 8 characters'
    
    if not formData['password'] == formData['confirm_password']:
      errors['confirm_password'] = 'Must match password'

    return errors