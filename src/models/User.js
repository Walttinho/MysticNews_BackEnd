import mongoose from "mongoose";
import { config, bcrypt } from "../../config.js";

// Esquema para a coleção de usuários
<<<<<<< HEAD
=======
// Schema for the users collection
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
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
<<<<<<< HEAD
=======
// Function executed before saving a user to the database
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, config.bcryptSaltRounds);
  next();
});

// Modelo para a coleção de usuários
<<<<<<< HEAD
=======
// Model for the users collection
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
const User = mongoose.model("User", UserSchema);

export default User;

