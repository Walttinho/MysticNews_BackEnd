import { bcrypt } from "../../config.js";
import userRepository from "../Repository/user.Repository.js";
import authService from "../services/auth.service.js";
import { bcryptSaltRounds, bcrypt } from "../../config.js";

// Função para criar um novo usuário
const createService = async (body) => {
  const { name, username, email, password, avatar, background } = body;

  if (!name || !username || !email || !password || !avatar || !background)
    throw new Error("Submit all fields for registration");

  const foundUser = await userRepository.findByEmailUser(data.email);
  if (foundUser) throw new Error("User already exists");

  const user = await userRepository.createRepository(body);

  if (!user) throw new Error("Error Creating User");

  const token = authService.generateToken(user.id);

  return {
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
      background,
    },
    token,
  };
};

// Função para obter todos os usuários
const findAllService = async () => {
  const users = await userRepository.findAllRepository();

  if (users.length === 0) throw new Error("There are no registered users");

  return users;
};

// Função para obter um usuário pelo ID
const findByIdService = async (userId, userIdLogged) => {
  let idParam;
  if (!userId) {
    userId = userIdLogged;
    idParam = userId;
  } else {
    idParam = userId;
  }
  if (!idParam)
    throw new Error("Send an ID in the parameters to search for the user");
  const user = await userRepository.findByIdRepository(idParam);

  return user;
};

// Função para atualizar um usuário
const updateUserService = async (body, userId) => {
  const { name, username, email, password, avatar, background } = body;
  if (!name && !username && !email && !password && !avatar && !background)
    throw new Error("Submit at least one field for update");

  const user = await userRepository.findByIdRepository(id);

  if (user._id != userId)
    throw new Error(
      "Submit at least one field for updateYou cannot update this user"
    );

  if (password) {
    password = await bcrypt.hash(password, bcryptSaltRounds);
  }

  await userRepository.updateRepository(
    userId,
    body
  );

  // Retorna a resposta de sucesso
  return { message: "User successfully updated" };
};

export default {
  createService,
  findAllService,
  findByIdService,
  updateUserService,
};
