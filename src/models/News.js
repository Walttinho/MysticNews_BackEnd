import mongoose from "mongoose";

// Esquema para a coleção de notícias
const NewsSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },

  text: {
    type: String,
    require: true,
  },

  banner: {
    type: String,
    require: true,
  },

  createAt: {
    type: Date,
    default: Date.now(),
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },

  likes: {
    type: Array,
    require: true,
  },

  comments: {
    type: Array,
    require: true,
  },
});

// Modelo para a coleção de notícias
const News = mongoose.model("News", NewsSchema)

export default News