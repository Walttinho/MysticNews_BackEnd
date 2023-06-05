const route = require("express").Router(); 
const userController = require("../controllers/user.controller");

// Rota para criar um novo usuário
route.post("/", userController.createUser);

// Rota para obter todos os usuários
route.get("/", userController.findAll);

// Rota para obter um usuário pelo ID
route.get("/:id", userController.findById);

module.exports = route;
 
  
