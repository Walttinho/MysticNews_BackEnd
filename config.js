import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

export const config = {
  // Configurações de autenticação
  sign: jwt.sign,
  verify: jwt.verify,
  secret: process.env.JWT_SECRET || "your-secret-key",
  expiration: process.env.JWT_EXPIRATION || "1d",
  hash: bcrypt.hash,
  compareSync: bcrypt.compareSync,
  salt: parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10,
  port: process.env.PORT || 3001,
  mongoDBUri: process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase",
};

export const connectDatabase = async () => {
  console.log("Wait connecting to the database");
  try {
    const uri = config.mongoDBUri;
    if (!uri) {
      throw new Error("MONGODB_URI not found in environment variables");
    }
  
    // Conecta ao banco de dados MongoDB utilizando a URL fornecida no arquivo de configuração
   
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
};
