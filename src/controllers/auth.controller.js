import bcrypt from "bcryptjs";
import { loginService, generateToken, logoutService } from "../services/auth.service.js";

// Função para realizar o login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Verifica se o usuário existe e se a senha está correta
    const user = await loginService(email);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(404).send({ message: "User or Password not found" });
    }

    // Gera o token de autenticação para o usuário
    const token = generateToken(user.id);

    // Retorna a resposta com o token de autenticação
    res.send({ token });
  } catch (error) {
    // Captura e trata qualquer erro
    console.error("Login error:", error);
    res.status(500).send({ message: "Login error" });
  }
};

// Função para realizar o logout
const logout = async (req, res) => {
  const { userId } = req.body;
  try {
    // Chame o serviço de logout
    const result = await logoutService(userId);

    // Retorna a resposta com a mensagem de logout bem-sucedido
    res.send(result);
  } catch (error) {
    // Captura e trata qualquer erro
    console.error("Logout error:", error);
    res.status(500).send({ message: "Logout error" });
  }
};

export { login, logout };
