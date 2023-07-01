import User from "../models/User.js";

// Serviço para obter um usuário pelo e-mail
export const findByEmailRepository = (email) => User.findOne({ email: email });

// Serviço para criar um novo usuário
export const createRepository = (body) => User.create(body);

// Serviço para obter todos os usuários
export const findAllRepository = () => User.find();

// Serviço para obter um usuário pelo ID
export const findByIdRepository = (id) => User.findById(id);

// Serviço para Atualizar um usuário
export const updateRepository = (id,
  name,
  username,
  email,
  password,
  avatar,
  background) =>
  User.findOneAndUpdate({
    _id: id,
  },
  {
    name,
    username,
    email,
    password,
    avatar,
    background,
  },
  {
    rawResult: true,
  });
