import User from "../models/User.js";

export const loginRepository = (email) =>
  User.findOne({ email: email }).select("+password");