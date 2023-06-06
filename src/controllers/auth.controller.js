import bcrypt from "bcryptjs";
import { loginService, generateToken } from "../services/auth.service.js";

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginService(email);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(404).send({ message: "User or Password not found" });
    }
    const token = generateToken(user.id);

    res.send({token});
  } catch (error) {
    // Captura e trata qualquer erro
    console.error("Login error:", error);
    res.status(500).send({ message: "Login error" });
  }
};

export { login };
