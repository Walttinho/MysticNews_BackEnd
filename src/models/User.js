import mongoose from "mongoose";
import { config } from "../../config.js";

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
    lowercase: true,
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
  this.password = await config.hash(this.password, config.salt);
  next();
});


const User = mongoose.model("User", UserSchema);

export default User;