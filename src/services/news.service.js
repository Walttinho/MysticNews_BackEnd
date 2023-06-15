import News from "../models/News.js";

export const createService = (body) => News.create(body);

// Serviço para obter todas as notícias
// Service to get all news
export const findAllService = (offset, limit) =>
  News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

// Serviço para contar o número de notícias
// Service to count the number of news
export const countNewsService = () => News.countDocuments();

// Serviço para obter a notícia mais recente
// Service to get the top news
export const topNewsService = () =>
  News.findOne().sort({ _id: -1 }).populate("user");

// Serviço para obter uma notícia pelo ID
// Service to get a news by ID
export const findByIdService = (id) => News.findById(id).populate("user");

// Serviço para pesquisar notícias por título
// Service to search news by title
export const searchByTitleService = (title) =>
  News.find({
    title: { $regex: `${title || ""}`, $options: "i" },
  })
    .sort({ _id: -1 })
    .populate("user");

// Serviço para obter notícias de um usuário específico
// Service to get news by a specific user
export const byUserService = (id) =>
  News.find({ user: id }).sort({ _id: -1 }).populate("user");

// Serviço para atualizar uma notícia
// Service to update a news
export const updateNewsService = (id, title, text, banner) =>
  News.findOneAndUpdate(
    { _id: id },
    { title, text, banner },
    { rawResult: true }
  );

// Serviço para deletar uma notícia
// Service to delete a news
export const deleteNewsService = (id) => News.findOneAndDelete({ _id: id });

// Serviço para adicionar um like a uma notícia
// Service to add a like to a news
export const newsLikedService = (idNews, userId) =>
  News.findOneAndUpdate(
    { _id: idNews, "likes.userId": { $nin: [userId] } },
    { $push: { likes: { userId, created: new Date() } } }
  );

// Serviço para remover um like de uma notícia
// Service to remove a like from a news
export const deleteNewsLikedService = (idNews, userId) =>
  News.findOneAndUpdate({ _id: idNews }, { $pull: { likes: { userId } } });

// Serviço para adicionar um comentário a uma notícia
// Service to add a comment to a news
export const addCommentNewsService = (idNews, comment, userId) => {
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

// Serviço para remover um comentário de uma notícia
// Service to remove a comment from a news
export const delCommentNewsService = (idNews, idComment, userId) =>
  News.findOneAndUpdate(
    { _id: idNews },
    { $pull: { comments: { idComment, userId } } }
    );
