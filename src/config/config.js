import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Carrega as variáveis de ambiente do arquivo .env
// Load environment variables from .env file
dotenv.config();

const config = {
  // Configurações de autenticação
  // Authentication settings
  jwtSecret: process.env.JWT_SECRET || "your-secret-key",
  jwtExpiration: process.env.JWT_EXPIRATION || "1d",

  // Configurações de segurança
  // Security settings
  bcryptSaltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10,

  // Outras configurações técnicas
  // Other technical settings
  port: process.env.PORT || 3000,
  mongoDBUri: process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase",
};

export { config, bcrypt, jwt };


