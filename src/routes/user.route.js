const route = require("express").Router();
const userController = require("../controllers/user.controller");

const { validId, validUser } = require("../middlewares/global.middlewares");

// Rota para criar um novo usuário
route.post("/", userController.createUser);

// Rota para obter todos os usuários
route.get("/", userController.findAll);

// Rota para obter um usuário pelo ID
route.get("/:id", validId, validUser, userController.findById);

// Rota para obter um usuário pelo ID
route.patch("/:id", validId, validUser, userController.updateUser);

module.exports = route;
