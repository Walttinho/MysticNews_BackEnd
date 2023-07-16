import { loginService } from "../services/auth.service.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await loginService(email, password);
    return res.send({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send({ message: "Login error" });
  }
};
