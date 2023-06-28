import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

export const config = {
  // Configurações de autenticação
  jwtSecret: process.env.JWT_SECRET || "your-secret-key",
  jwtExpiration: process.env.JWT_EXPIRATION || "1d",

  // Configurações de segurança
  bcryptSaltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10,

  // Outras configurações técnicas
  port: process.env.PORT || 3001,
  mongoDBUri: process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase",
};

export const connectDatabase = async () => {
  console.log("Wait connecting to the database");
  try {
  
    // Conecta ao banco de dados MongoDB utilizando a URL fornecida no arquivo de configuração
   
    await mongoose.connect(config.mongoDBUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
};

export {jwt, bcrypt}