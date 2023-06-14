import User from "../models/User.js";

// Serviço para criar um novo usuário
// Service to create a new user
const createService = (body) => User.create(body);

// Serviço para obter todos os usuários
// Service to get all users
const findAllService = () => User.find();

// Serviço para obter um usuário pelo ID
// Service to get a user by ID
const findByIdService = (id) => User.findById(id);

// Serviço para atualizar um usuário
// Service to update a user
const updateService = (
  id,
  name,
  username,
  email,
  password,
  avatar,
  background
) =>
  User.findOneAndUpdate(
    { _id: id },
    { name, username, email, password, avatar, background }
  );

export default {
  findAllService,
  findByIdService,
  updateService,
  createService,
};
