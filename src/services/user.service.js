const User = require("../models/User");

// Serviço para criar um novo usuário
const createService = (body) => User.create(body);

// Serviço para obter todos os usuários
const findAllService = () => User.find();

// Serviço para obter um usuário pelo ID
const findByIdService = (id) => User.findById(id);

module.exports = {
  createService,
  findAllService,
  findByIdService,
};
