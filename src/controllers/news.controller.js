import {
  createService,
  findAllService,
  countNewsService,
  topNewsService,
  finByIdService,
  searchByTitleService,
  byUserService
} from "../services/news.service.js";

export const create = async (req, res) => {
  try {
    const { title, text, banner } = req.body;

    if (!title || !banner || !text) {
      res.send(400).send({
        message: "Submit all fields for registration",
      });
    }

    await createService({
      title,
      text,
      banner,
      user: req.userId,
    });

    res.sendStatus(201);
  } catch (error) {
    // Captura e trata qualquer erro
    console.error("Error creating news:", error);
    res.status(500).send({ message: "Error creating news" });
  }
};

export const findAll = async (req, res) => {
  try {
    let { limit, offset } = req.query;
    limit = Number(limit);
    offset = Number(offset);

    if (!limit) {
      limit = 5;
    }
    if (!offset) {
      offset = 0;
    }

    const news = await findAllService(offset, limit);
    const totalNews = await countNewsService();
    const currentUrl = req.baseUrl;

    const next = offset + limit;
    const nextUrl =
      next < totalNews ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

    const previous = offset - limit < 0 ? null : offset - limit;
    const previousUrl =
      previous != null
        ? `${currentUrl}?limit=${limit}&offset=${previous}`
        : null;

    if (news.length === 0) {
      return res.status(400).send({ message: "There are no registered news" });
    }

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
  } catch (error) {
    // Captura e trata qualquer erro
    res.status(500).send({ message: error.message });
  }
};

export const topNews = async (req, res) => {
  try {
    const news = await topNewsService();

    if (!news) {
      return res.status(400).send({ message: "There are no registered news" });
    }

    res.send({
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
    });
  } catch (error) {
    // Captura e trata qualquer erro
    res.status(500).send({ message: error.message});
  }
};

export const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await finByIdService(id);
    res.send({
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
    });
  } catch (error) {
    // Captura e trata qualquer erro
    res.status(500).send({ message: error.message});
  }
};
export const searchByTitle = async (req, res) => {
  try {
    const { title } = req.query;
    const news = await searchByTitleService(title);

    if (news.length === 0) {
      return res
        .status(400)
        .send({ message: error.message });
    }
   
    return res.send({
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
    }))})
  } catch (error) {
    // Captura e trata qualquer erro
    res.status(500).send({ message: error.message});
  }
};

export const byUser = async (req, res) => {
  try{
    const id = req.userId
    const news = await byUserService(id)

    return res.send({
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
    }))})

  } catch (error) {
    // Captura e trata qualquer erro
    res.status(500).send({ message: error.message});
  }

}