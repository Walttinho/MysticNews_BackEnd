import userService from "../services/user.service.js";

// Função para criar um novo usuário
// Function to create a new user
const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  // Verifica se todos os campos obrigatórios foram fornecidos
  // Checks if all required fields were provided
  if (!name || !username || !email || !password || !avatar || !background) {
    return res.status(400).send({ message: "Submit all fields for registration" });
  }

  try {
    // Cria o usuário usando o serviço de criação do usuário
    // Creates the user using the user creation service
    const user = await userService.createService(req.body);

    if (!user) {
      return res.status(400).send({ message: "Failed to perform the operation" });
    }

    // Retorna a resposta com o usuário criado
    // Returns the response with the created user
    res.status(201).send({
      message: "User created successfully",
      user: {
        id: user._id,
        name,
        username,
        email,
        avatar,
        background,
      },
    });
  } catch (error) {
    // Captura e trata qualquer erro
    // Catches and handles any errors
    console.error("Error creating user:", error);
    res.status(500).send({ message: "Failed to perform the operation" });
  }
};

// Função para obter todos os usuários
// Function to get all users
const findAll = async (req, res) => {
  try {
    // Obtém todos os usuários usando o serviço de busca de todos os usuários
    // Gets all users using the service to find all users
    const users = await userService.findAllService();

    if (users.length === 0) {
      return res.status(400).send({ message: "There are no registered users" });
    }

    // Retorna a resposta com todos os usuários
    // Returns the response with all users
    res.send(users);
  } catch (error) {
    // Captura e trata qualquer erro
    // Catches and handles any errors
    console.error("Error finding users:", error);
    res.status(500).send({ message: "Failed to perform the operation" });
  }
};

// Função para obter um usuário pelo ID
// Function to get a user by ID
const findById = async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (error) {
    // Captura e trata qualquer erro
    // Catches and handles any errors
    console.error("Error finding user:", error);
    res.status(500).send({ message: "Failed to perform the operation" });
  }
};

// Função para atualizar um usuário
// Function to update a user
const updateUser = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  // Verifica se algum campo foi preenchido
  // Checks if any field was filled
  if (!name && !username && !email && !password && !avatar && !background) {
    return res
      .status(400)
      .send({ message: "Submit at least one field for update" });
  }

  const { id, user } = req;

  try {
    await userService.updateService(
      id,
      name,
      username,
      email,
      password,
      avatar,
      background
    );

    // Retorna a resposta de sucesso
<<<<<<< HEAD
=======
    // Returns success response
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
    res.send({ message: "User successfully updated" });
  } catch (error) {
    // Captura e trata qualquer erro
    // Catches and handles any errors
    console.error("Error updating user:", error);
    res.status(500).send({ message: "Failed to perform the operation" });
  }
};

export default {
  create,
  findAll,
  findById,
  updateUser,
};

