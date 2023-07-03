import { notFoundError, unauthorizedError } from "../error/error.js";
import {
  createRepository,
  findAllRepository,
  countNewsRepository,
  topNewsRepository,
  findByIdRepository,
  searchByTitleRepository,
  findByUserRepository,
  updateNewsRepository,
  delNewsRepository,
  newsLikedRepository,
  delLikedNewsRepository,
  addCommentNewsRepository,
  delCommentNewsRepository,
} from "../repositories/news.repositories.js";

export const createNewsService = async (title, banner, text, userId) => {
  const news = await createRepository(
    {
      title,
      banner,
      text,
    },
    userId
  );
  return news;
};

export const findAllService = async (limit, offset, currentUrl) => {
  if (!limit) {
    limit = 5;
  }
  if (!offset) {
    offset = 0;
  }

  const news = await findAllRepository(offset, limit);
  const totalNews = await countNewsRepository();

  const next = offset + limit;
  const nextUrl =
    next < totalNews ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

  const previous = offset - limit < 0 ? null : offset - limit;
  const previousUrl =
    previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;

  news.shift(); //remove o primeiro item da lista
  res.send({
    nextUrl,
    previousUrl,
    limit,
    offset,
    totalNews,

    results: news.map((item) => ({
      id: item._id,
      title: item.title,
      text: item.text,
      banner: item.banner,
      likes: item.likes,
      comments: item.comments,
      name: item.user.name,
      username: item.user.username,
      userAvatar: item.user.avatar,
    })),
  });
};

export const topNewsService = async () => {
  const news = await topNewsRepository();

  if (!news) throw notFoundError();

  return {
    news: {
      id: news._id,
      title: news.title,
      text: news.text,
      banner: news.banner,
      likes: news.likes,
      comments: news.comments,
      name: news.user.name,
      username: news.user.username,
      userAvatar: news.user.avatar,
    },
  };
};

export const searchNewsService = async (title) => {
  const foundNews = await searchByTitleRepository(title);

  return {
    results: foundNews.map((news) => ({
      id: news._id,
      title: news.title,
      banner: news.banner,
      text: news.text,
      likes: news.likes,
      comments: news.comments,
      name: news.user.name,
      username: news.user.username,
      avatar: news.user.avatar,
    })),
  };
};

export const findByUserService = async (userId) => {
  const news = await findByUserRepository(userId);

  return {
    results: news.map((item) => ({
      id: item._id,
      title: item.title,
      text: item.text,
      banner: item.banner,
      likes: item.likes,
      comments: item.comments,
      name: item.user.name,
      username: item.user.username,
      userAvatar: item.user.avatar,
    })),
  };
};

export const findByIdService = async (id) => {
  const news = await findByIdRepository(id);
  if (!news) throw notFoundError();

  return {
    results: news.map((item) => ({
      id: item._id,
      title: item.title,
      text: item.text,
      banner: item.banner,
      likes: item.likes,
      comments: item.comments,
      name: item.user.name,
      username: item.user.username,
      userAvatar: item.user.avatar,
    })),
  };
};

export const updateNewsService = async (
  title,
  banner,
  text,
  userId,
  idNews
) => {
  const news = await findByIdService(idNews);

  if (news.user.id != new ObjectId(userId)) throw unauthorizedError();

  const newsUpdated = await updateNewsRepository(idNews, title, text, banner);
  return newsUpdated;
};

export const delNewsService = async (idNews, userId) => {
  const news = await findByIdRepository(idNews);
  if (!news) throw notFoundError();

  if (news.user.id != userId) throw unauthorizedError();

  await delNewsRepository(idNews);
};

export const likedNewsService = async (idNews, userId) => {
  const newsLiked = await newsLikedRepository(idNews, userId);

  if (newsLiked.ok) {
    await delLikedNewsRepository(idNews, userId);
    return { message: "Like successfully removed" };
  }

  return { message: "Like done successfully" };
};

export const addCommentNewsService = async (idNews, userId, comment) => {
  await addCommentNewsRepository(idNews, comment, userId);

  return { message: "Comment added successfully" };
};

export const delCommentNewsService = async (idNews, userId, idComment) => {
  const commentDeleted = await delCommentNewsRepository(
    idNews,
    idComment,
    userId
  );

  return {
    message: "Comment successfully removed!",
  };
};
