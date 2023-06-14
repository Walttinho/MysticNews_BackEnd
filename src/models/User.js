import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

// Esquema para a coleção de usuários
// Schema for the users collection
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  avatar: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
});

// Função executada antes de salvar um usuário no banco de dados
// Function executed before saving a user to the database
UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Modelo para a coleção de usuários
// Model for the users collection
const User = mongoose.model("User", UserSchema);

export default User;

