const userService = require("../services/user.service");
const mongoose = require("mongoose");

// Função para criar um novo usuário
const createUser = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  // Verifica se todos os campos obrigatórios foram fornecidos
  if (!name || !username || !email || !password || !avatar || !background) {
    return res
      .status(400)
      .send({ message: "Submit all fields for registration" });
  }

  try {
    // Cria o usuário usando o serviço de criação do usuário
    const user = await userService.createService(req.body);

    if (!user) {
      return res.status(400).send({ message: "Error Creating User" });
    }

    // Retorna a resposta com o usuário criado
    res.status(201).send({
      message: "User created Successfully",
      user: {
        id: user._id,
        name,
        username,
        email,
        avatar,
        background,
      },
    });
    //Captura e trata qualquer erro
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send({ message: "Error creating user" });
  }
};

// Função para obter todos os usuários
const findAll = async (req, res) => {
  try {
    // Obtém todos os usuários usando o serviço de busca de todos os usuários
    const users = await userService.findAllService();

    if (users.length === 0) {
      return res.status(400).send({ message: "There are no registered users" });
    }

    // Retorna a resposta com todos os usuários
    res.send(users);
  } catch (error) {
    //Captura e trata qualquer erro
    console.error("Error finding users:", error);
    res.status(500).send({ message: "Error finding users" });
  }
};

// Função para obter um usuário pelo ID
const findById = async (req, res) => {
  const id = req.params.id;

  // Verifica se o ID fornecido é um ObjectId válido
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid ID" });
  }

  try {
    // Obtém o usuário pelo ID usando o serviço de busca pelo ID
    const user = await userService.findByIdService(id);

    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    // Retorna a resposta com o usuário encontrado
    res.send(user);
  } catch (error) {
    //Captura e trata qualquer erro
    console.error("Error finding user by ID:", error);
    res.status(500).send({ message: "Error finding user by ID" });
  }
};

// Função para obter um usuário pelo ID
const updateUser = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;
  // Verifica se todos os campos obrigatórios foram fornecidos
  if (!name && !username && !email && !password && !avatar && !background) {
    return res
      .status(400)
      .send({ message: "Submit at least one fields for update" });
  }
  const id = req.params.id;

  // Verifica se o ID fornecido é um ObjectId válido
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid ID" });
  }
  const user = await userService.findByIdService(id);

  if (!user) {
    return res.status(400).send({ message: "User not Found" });
  }

  await userService.updateService(
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
  );

  res.send({message: 'User Seccessfully update!'})

};

module.exports = {
  createUser,
  findAll,
  findById,
  updateUser,
};
