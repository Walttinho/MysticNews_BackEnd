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
  } catch (error) {
    console.error("Error create user:", error);
    res.status(500).send({ message: "Error create user" });
  }
};

export const findAllUser = async (req, res) => {
  try {
    const users = await findAllService();
    return res.send(users);
  } catch (error) {
    console.error("Error finding user:", error);
    res.status(500).send({ message: "Error finding user" });
  }
};

export const findByIdUser = async (req, res) => {
  const { id: userId } = req.params;
  const userIdLogged = req.userId;

  try {
    const user = await findByIdService(userId, userIdLogged);
    return res.send(user);
  } catch (error) {
    console.error("Error finding user:", error);
    res.status(500).send({ message: "Error finding user" });
  }
};

export const updateUser = async (req, res) => {
  const body = req.body;
  const userId = req.userId;
  try {
    const response = await updateService(body, userId);
    return res.send(response);
  } catch (error) {
    console.error("Error update user:", error);
    res.status(500).send({ message: "Error update user" });
  }
};
