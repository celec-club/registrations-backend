from flask import Blueprint
from core.controllers.user import UserController


def create_user_routes(user_service):
    user_controller = UserController(user_service)
    user_bp = Blueprint("user", __name__)

    user_bp.route("/users", methods=["POST"])(user_controller.create_user)
    user_bp.route("/users", methods=["GET"])(user_controller.get_users)
    user_bp.route("/users/<user_id>", methods=["GET"])(user_controller.get_user)
    user_bp.route("/users/<user_id>", methods=["PUT"])(user_controller.update_user)
    user_bp.route("/users/<user_id>", methods=["DELETE"])(user_controller.delete_user)

    return user_bp
