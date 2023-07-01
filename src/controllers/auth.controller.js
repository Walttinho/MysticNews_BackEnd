import {config} from "../../config.js"
import { loginService, generateToken} from "../services/auth.service.js";

// Função para realizar o login
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Verifica se o usuário existe e se a senha está correta
    const user = await loginService(email);
    if (!user || !config.compareSync(password, user.password)) {
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




