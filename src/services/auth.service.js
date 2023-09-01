import { config } from "../../config.js";
import { loginRepository } from "../repositories/auth.repositories.js";

export const generateToken = (id) => {
  const token = config.sign({ id: id }, config.secret, {
    expiresIn: config.expiration,
  });
  return token;
};

export const loginService = async (email, password) => {
  const user = await loginRepository(email);
  if (!user) throw new Error("Wrong password or username");

  const isPasswordValid = config.compareSync(password, user.password);

  if (!isPasswordValid) throw new Error("Wrong password or username");

  const token = generateToken(user.id);

  return token;
};
