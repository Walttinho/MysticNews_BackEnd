import mongoose from "mongoose";

// Esquema para a coleção de notícias
// Schema for the news collection
const NewsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  text: {
    type: String,
    required: true,
  },

  banner: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  likes: {
    type: Array,
    required: true,
  },

  comments: {
    type: Array,
    required: true,
  },
});

// Modelo para a coleção de notícias
// Model for the news collection
const News = mongoose.model("News", NewsSchema);

export default News;
