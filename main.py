from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from core.models.user import User
from core.services.user import UserService
from core.routes.user import create_user_routes
import os

from dotenv import load_dotenv
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

app.register_blueprint(create_user_routes(user_service))

@app.route("/", methods=["GET"])
def index():
    return jsonify({
        "status": "online",
        "message": "Registration system is running!"
    })

# For local development only
if __name__ == "__main__":
    app.run(debug=True)
