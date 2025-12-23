from flask import request, jsonify


class UserController:
    def __init__(self, user_service):
        self.user_service = user_service

    def create_user(self):
        form_data = request.json  # assuming JSON input
        user_data = {
            "fullName": form_data.get("fullName"),
            "dateOfBirth": form_data.get("dateOfBirth"),
            "email": form_data.get("email"),
            "phoneNumber": form_data.get("phoneNumber"),
            "isMember": form_data.get("isMember"),
            "isUsthbStudent": form_data.get("isUsthbStudent"),
            "studentId": form_data.get("studentIdNumber"),
            "studyLevel": form_data.get("studyLevel"),
            "fieldOfStudy": form_data.get("fieldOfStudy"),
            "skills": form_data.get("skills"),
            "areasOfInterest": form_data.get("areasOfInterest"),
            "department": form_data.get("department"),
            "linkedin": form_data.get("linkedinProfile"),
            "github": form_data.get("githubProfile"),
            "completedProjects": form_data.get("completedProjects"),
            "motivation": form_data.get("motivation"),
            "schoolCertUrl": form_data.get("schoolCertUrl"),
            "cvUrl": form_data.get("cvUrl"),
        }
        user_id = self.user_service.create_user(user_data)
        return jsonify({"userId": user_id}), 201

    def get_users(self):
        users = self.user_service.get_users()
        for user in users:
            user["_id"] = str(user["_id"])
        return jsonify(users)

    def get_user(self, user_id):
        user = self.user_service.get_user(user_id)
        if not user:
            return jsonify({"error": "User not found"}), 404
        user["_id"] = str(user["_id"])
        return jsonify(user)

    def update_user(self, user_id):
        user_data = request.json
        updated_user = self.user_service.update_user(user_id, user_data)
        if not updated_user:
            return jsonify({"error": "User not found"}), 404
        updated_user["_id"] = str(updated_user["_id"])
        return jsonify(updated_user)

    def delete_user(self, user_id):
        self.user_service.delete_user(user_id)
        return jsonify({"message": "User deleted"}), 200
