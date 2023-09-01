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

export const createNewsService = async ({ title, banner, text }, userId) => {
  if (!title || !banner || !text)
    throw new Error("Submit all fields for registration");

  const news = await createRepository({ title, banner, text }, userId);
  return news;
};

export const findAllService = async (limit, offset, currentUrl) => {
  limit = Number(limit);
  offset = Number(offset);

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
  news.shift();
  return {
    nextUrl,
    previousUrl,
    limit,
    offset,
    totalNews,

    results: news.map((news) => ({
      id: news._id,
      title: news.title,
      text: news.text,
      banner: news.banner,
      likes: news.likes,
      comments: news.comments,
      name: news.user?.name,
      username: news.user?.username,
      userAvatar: news.user?.avatar,
    })),
  };
};

export const topNewsService = async () => {
  const news = await topNewsRepository();

  if (!news) throw new Error("News not found");

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
  if (foundNews.length === 0)
    throw new Error("There are no news with this title");

  return {
    results: foundNews.map((news) => ({
      id: news._id,
      title: news.title,
      text: news.text,
      banner: news.banner,
      likes: news.likes,
      comments: news.comments,
      name: news.user?.name,
      username: news.user?.username,
      userAvatar: news.user?.avatar,
    })),
  };
};

export const findByUserService = async (id) => {
  const news = await findByUserRepository(id);

  return {
    results: news.map((news) => ({
      id: news._id,
      title: news.title,
      text: news.text,
      banner: news.banner,
      likes: news.likes,
      comments: news.comments,
      name: news.user?.name,
      username: news.user?.username,
      userAvatar: news.user?.avatar,
    })),
  };
};

export const findByIdService = async (id) => {
  const news = await findByIdRepository(id);
  if (!news) throw notFoundError();

  return {
    id: news._id,
    title: news.title,
    text: news.text,
    banner: news.banner,
    likes: news.likes,
    comments: news.comments,
    name: news.user?.name,
    username: news.user?.username,
    userAvatar: news.user?.avatar,
  };
};

export const updateNewsService = async (id, userId, title, text, banner) => {
  if (!title && !banner && !text)
    throw new Error("Submit at least one field to update the news");

  const news = await findByIdRepository(id);

  if (!news) throw new Error("News not found");
  if (!news.user._id.equals(userId))
    throw new Error("You didn't create this News");

  await updateNewsRepository(id, title, text, banner);
};

export const delNewsService = async (id, userId) => {
  const news = await findByIdRepository(id);
  if (!news) throw new Error("News not found");
  if (!news.user._id.equals(userId))
    throw new Error("You didn't create this News");

  await delNewsRepository(id);
};

export const likedNewsService = async (id, userId) => {
  const newsLiked = await newsLikedRepository(id, userId);

  if (newsLiked.lastErrorObject.n === 0) {
    await delLikedNewsRepository(id, userId);
    return { message: "Like successfully removed" };
  }

  return { message: "Like done successfully" };
};

export const addCommentNewsService = async (idNews, comment, userId) => {
  if (!comment) throw new Error("Write a message to comment");
  const news = await findByIdRepository(idNews);
  if (!news) throw notFoundError();

  await addCommentNewsRepository(idNews, comment, userId);

  return { message: "Comment added successfully" };
};

export const delCommentNewsService = async (idNews, idComment, userId) => {
  const news = await findByIdRepository(idNews);
  if (!news) throw notFoundError();
  await delCommentNewsRepository(idNews, idComment, userId);

  return {
    message: "Comment successfully removed!",
  };
};
