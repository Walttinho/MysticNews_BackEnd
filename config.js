import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const config = {
  // Configurações de autenticação
  jwtSecret: process.env.JWT_SECRET || "your-secret-key",
  jwtExpiration: process.env.JWT_EXPIRATION || "1d",

  // Configurações de segurança
  bcryptSaltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10,

  // Outras configurações técnicas
  port: process.env.PORT || 3000,
  mongoDBUri: process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase",
};

export { config, bcrypt, jwt };
