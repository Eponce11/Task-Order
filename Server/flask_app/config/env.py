
from dotenv import load_dotenv
import os

load_dotenv()

DB_CONNECTION = os.getenv("DATABASE_CONNECTION")
APP_SECRET = os.getenv("APP_SECRET")