import User from "../models/User.js";

export const findByEmailRepository = (email) => User.findOne({ email: email });

export const createRepository = (body) => User.create(body);

export const findAllRepository = () => User.find();

export const findByIdRepository = (idParam) => User.findById(idParam);

export const updateRepository = (id, body) =>
  User.findOneAndUpdate(
    {
      _id: id,
    },

    body,

    {
      rawResult: true,
    }
  );
