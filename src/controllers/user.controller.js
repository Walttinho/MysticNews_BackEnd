import {
  createService,
  findAllService,
  findByIdService,
  updateService,
} from "../services/user.service.js";

export const createUser = async (req, res) => {
  const body = req.body;

  try {
    const user = await createService(body);

    return res.status(201).send(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const findAllUser = async (req, res) => {
  try {
    const users = await findAllService();
    return res.send(users);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const findByIdUser = async (req, res) => {
  const { id: userId } = req.params;
  const userIdLogged = req.userId;

  try {
    const user = await findByIdService(userId, userIdLogged);
    return res.send(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const updateUser = async (req, res) => {
  const body = req.body;
  const userId = req.userId;
  try {
    const response = await updateService(body, userId);
    return res.send(response);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
