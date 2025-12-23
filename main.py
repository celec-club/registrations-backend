from flask import Flask
from pymongo import MongoClient
from core.models.user import User
from core.services.user import UserService
from core.routes.user import create_user_routes
from dotenv import load_dotenv
from flask_cors import CORS
import os

load_dotenv()

app = Flask(__name__)
CORS(app, origins=["https://registrations.celec.codes"])

# MongoDB setup
mongo_uri = os.getenv("MONGO_URI")
client = MongoClient(mongo_uri)
db = client["registrations"]

# Initialize model and service
user_model = User(db)
user_service = UserService(user_model)

# Register routes
app.register_blueprint(create_user_routes(user_service))

if __name__ == "__main__":
    app.run(debug=True)
