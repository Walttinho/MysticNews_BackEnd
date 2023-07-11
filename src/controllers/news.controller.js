import {
  createNewsService,
  findAllService,
  topNewsService,
  findByIdService,
  searchNewsService,
  findByUserService,
  updateNewsService,
  delNewsService,
  likedNewsService,
  addCommentNewsService,
  delCommentNewsService,
} from "../services/news.service.js";

export const create = async (req, res) => {
  const { title, text, banner } = req.body;
  const userId = req.userId;
  try {
    const createdNews = await createNewsService(
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
  let { limit, offset } = req.query;
  const currentUrl = req.baseUrl;
  try {
    const news = await findAllService(limit, offset, currentUrl);

    return res.send(news);
  } catch (error) {
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
    const news = await searchNewsService(title);
    return res.send(news);
  } catch (error) {
    console.error("Error searching news:", error);
    res.status(500).send({ message: "Error searching news" });
  }
};

export const byUser = async (req, res) => {
  const userId = req.userId;
  try {
    const news = await findByUserService(userId);

    return res.send(news);
  } catch (error) {
    console.error("Error searching news by user:", error);
    res.status(500).send({ message: "Error searching news by user:" });
  }
};

export const updateNews = async (req, res) => {
  const { title, text, banner } = req.body;
  const { id } = req.params;
  const userId = req.userId;

  try {
    await updateNewsService(id, userId, title, text, banner);
    return res.send({ message: "News successfully updated!" });
  } catch (error) {
    console.error("Error updating news:", error);
    res.status(500).send({ message: "Error updating news" });
  }
};

export const deleteNews = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;
  try {
    await delNewsService(id, userId);
    return res.send({ message: "News successfully deleted" });
  } catch (error) {
    console.error("Error deleting news:", error);
    res.status(500).send({ message: "Error deleting news" });
  }
};

export const likeNews = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;
  try {
    const message = await likedNewsService(id, userId);

    return res.send(message);
  } catch (error) {
    console.error("Error liking news:", error);
    res.status(500).send({ message: "Error liking news" });
  }
};

export const addCommentNews = async (req, res) => {
  const { id: idNews } = req.params;
  const userId = req.userId;
  const { comment } = req.body;
  try {
    await addCommentNewsService(idNews, comment, userId);

    return res.send({
      message: "Comment successfully completed!",
    });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).send({ message: "Error adding comment" });
  }
};

export const delCommentNews = async (req, res) => {
  try {
    const { idNews, idComment } = req.params;
    const userId = req.userId;

    await delCommentNewsService(idNews, idComment, userId);

    res.send({ message: "Comment successfully removed" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
