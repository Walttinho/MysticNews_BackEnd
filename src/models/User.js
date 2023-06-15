import mongoose from "mongoose";
import { config, bcrypt } from "../../config";

// Esquema para a coleção de usuários
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
  avatar: {
    type: String,
    require: true,
  },
  background: {
    type: String,
    require: true,
  },
});

// Função executada antes de salvar um usuário no banco de dados
UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, config.bcryptSaltRounds);
  next();
});

// Modelo para a coleção de usuários
const User = mongoose.model("User", UserSchema);

export default User;
