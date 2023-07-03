import {
  createService,
  findAllService,
  countNewsService,
  topNewsService,
  findByIdService,
  searchByTitleService,
  byUserService,
  updateNewsService,
  deleteNewsService,
  newsLikedService,
  addCommentNewsService,
  delCommentNewsService,
} from "../services/news.service.js";

export const create = async (req, res) => {
  try {
    const { title, text, banner } = req.body;
    const userId = req.userId;

    const createdNews = await createService(
      {
        title,
        banner,
        text,
      },
      userId
    );

    return res.status(201).send({
      message: "News created successfully",
      news: createdNews,
    });
  } catch (error) {
    console.error("Error creating news:", error);
    res.status(500).send({ message: "Error creating news" });
  }
};

export const findAll = async (req, res) => {
  try {
    let { limit, offset } = req.query;
    const currentUrl = req.baseUrl;

    const news = await findAllService(offset, limit, currentUrl);

    return res.send(news);
  } catch (error) {
    // Captura e trata qualquer erro
    console.error("Error finding news:", error);
    res.status(500).send({ message: "Error finding news" });
  }
};

export const topNews = async (req, res) => {
  try {
    const news = await topNewsService();

    res.send(news);
  } catch (error) {
    console.error("Error finding top news:", error);
    res.status(500).send({ message: "Error finding top news" });
  }
};

export const findById = async (req, res) => {
  const { id } = req.params;
  try {
    const news = await findByIdService(id);
    res.send(news);
  } catch (error) {
    console.error("Error finding news:", error);
    res.status(500).send({ message: "Error finding news" });
  }
};

export const searchByTitle = async (req, res) => {
  const { title } = req.query;
  try {
    const news = await searchByTitleService(title);
    return res.send(news);
  } catch (error) {
    console.error("Error searching news:", error);
    res.status(500).send({ message: "Error searching news" });
  }
};

export const byUser = async (req, res) => {
  const userId = req.userId;
  try {
    const news = await byUserService(userId);

    return res.send(news);
  } catch (error) {
    console.error("Error searching news by user:", error);
    res.status(500).send({ message: "Error searching news by user:" });
  }
};

export const updateNews = async (req, res) => {
  try {
    const { title, text, banner } = req.body;
    const { idNews } = req.params;
    const userId = req.userId;

    const news = await updateNewsService(idNews, userId, title, text, banner);
    return res.send(news);
  } catch (error) {
    // Captura e trata qualquer erro
    console.error("Error updating news:", error);
    res.status(500).send({ message: "Error updating news" });
  }
};

export const deleteNews = async (req, res) => {
  const { idNews } = req.params;
  const userId = res.userId;
  try {
    await deleteNewsService(idNews, userId);
    return res.send({ message: "News successfully deleted" });
  } catch (error) {
    console.error("Error deleting news:", error);
    res.status(500).send({ message: "Error deleting news" });
  }
};

export const likeNews = async (req, res) => {
  const { idNews } = req.params;
  const userId = req.userId;
  try {
    const message = await newsLikedService(idNews, userId);

    return res.send(message);
  } catch (error) {
    // Captura e trata qualquer erro
    console.error("Error liking news:", error);
    res.status(500).send({ message: "Error liking news" });
  }
};

export const addCommentNews = async (req, res) => {
  const {idNews } = req.params;
  const userId = req.userId;
  const { comment } = req.body;
  try {
    const message = await addCommentNewsService(idNews, comment, userId);

    return res.send(message);
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).send({ message: "Error adding comment" });
  }
};

export const delCommentNews = async (req, res) => {
  try {
    const { idNews, idComment } = req.params;
    const userId = req.userId;

    const commentDeleted = await delCommentNewsService(
      idNews,
      idComment,
      userId
    );

    res.send(commentDeleted);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
