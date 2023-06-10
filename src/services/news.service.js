import News from "../models/News.js";

export const createService = (body) => News.create(body);

export const findAllService = (offset, limit) =>
  News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

export const countNewsService = () => News.countDocuments();

export const topNewsService = () =>
  News.findOne().sort({ _id: -1 }).populate("user");

export const finByIdService = (id) => News.findById(id).populate("user");
