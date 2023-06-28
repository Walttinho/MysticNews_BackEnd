import userService from "../services/user.service.js";

// Função para criar um novo usuário
const create = async (req, res) => {
  const body = req.body;

  try {
    const user = await userService.createService(body);

    return res.status(201).send(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

// Função para obter todos os usuários
const findAll = async (req, res) => {
  try {
    const users = await userService.findAllService();
    return res.send(users);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

// Função para obter um usuário pelo ID
const findById = async (req, res) => {
  const { id: userId } = req.params;
  const userIdLogged = req.userId;

  try {
    const user = await userRepository.findByIdRepository(userId, userIdLogged);

    return res.send(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

// Função para atualizar um usuário
const updateUser = async (req, res) => {
 const body = req.body
 const userId = req.userId

  try {
    const response = await userService.updateService(body, userId);

    // Retorna a resposta de sucesso
    return res.send(response);
  } catch (e) {
   
    res.status(500).send(e.message);
  }
};

export default {
  create,
  findAll,
  findById,
  updateUser,
};
