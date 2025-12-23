class UserService:
    def __init__(self, user_model):
        self.user_model = user_model

    def create_user(self, user_data: dict):
        return self.user_model.create(user_data)

    def get_users(self):
        return self.user_model.get_all()

    def get_user(self, user_id: str):
        return self.user_model.get_by_id(user_id)

    def update_user(self, user_id: str, user_data: dict):
        return self.user_model.update(user_id, user_data)

    def delete_user(self, user_id: str):
        return self.user_model.delete(user_id)
