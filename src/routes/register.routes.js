const express = require("express");
const RegisterController = require("../controllers/register.controller");

const RegisterRouter = express.Router();

RegisterRouter.post("/create-student", RegisterController.create);
RegisterRouter.get("/students", RegisterController.getAll);
RegisterRouter.get("/students/:id", RegisterController.getById);
RegisterRouter.put("/students/:id", RegisterController.update);
RegisterRouter.delete("/students/:id", RegisterController.delete);

module.exports = RegisterRouter;
