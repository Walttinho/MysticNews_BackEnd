import News from "../models/News.js";

export const createRepository = ({ title, banner, text }, userId) =>
  News.create({ title, banner, text }, userId);

export const findAllRepository = (offset, limit) =>
  News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

export const countNewsRepository = () => News.countDocuments();

export const topNewsRepository = () =>
  News.findOne().sort({ _id: -1 }).populate("user");

export const findByIdRepository = (id) => News.findById(id).populate("user");

export const searchByTitleRepository = (title) =>
  News.find({
    title: { $regex: `${title || ""}`, $options: "i" },
  })
    .sort({ _id: -1 })
    .populate("user");

export const findByUserRepository = (id) =>
  News.find({ user: id }).sort({ _id: -1 }).populate("user");

export const updateNewsRepository = (idNews, title, text, banner) =>
  News.findOneAndUpdate(
    { _id: idNews },
    { title, text, banner },
    { rawResult: true }
  );

export const delNewsRepository = (idNews) => News.findOneAndDelete({ _id: idNews });

// Serviço para adicionar um like a uma notícia
export const newsLikedRepository = (idNews, userId) =>
  News.findOneAndUpdate(
    { _id: idNews, "likes.userId": { $nin: [userId] } },
    { $push: { likes: { userId, created: new Date() } } }
  );

// Serviço para remover um like de uma notícia
export const delLikedNewsRepository = (idNews, userId) =>
  News.findOneAndUpdate({ _id: idNews }, { $pull: { likes: { userId } } });

export const commentNewsRepository = (idNews, comment, userId) => {
  const idComment = Math.floor(Date.now() * Math.random()).toString(36);

  return News.findOneAndUpdate(
    { _id: idNews },
    {
      $push: {
        comments: { idComment, userId, comment, createdAt: new Date() },
      },
    }
  );
};

export const delCommentNewsRepository = (idNews, idComment, userId) =>
  News.findOneAndUpdate(
    { _id: idNews },
    { $pull: { comments: { idComment, userId } } }
  );
