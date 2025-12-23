from pymongo import MongoClient
from bson.objectid import ObjectId


class User:
    def __init__(self, db):
        self.collection = db["users"]

    def create(self, data: dict):
        result = self.collection.insert_one(data)
        return str(result.inserted_id)

    def get_all(self):
        return list(self.collection.find())

    def get_by_id(self, user_id: str):
        return self.collection.find_one({"_id": ObjectId(user_id)})

    def update(self, user_id: str, data: dict):
        self.collection.update_one({"_id": ObjectId(user_id)}, {"$set": data})
        return self.get_by_id(user_id)

    def delete(self, user_id: str):
        self.collection.delete_one({"_id": ObjectId(user_id)})
        return True
