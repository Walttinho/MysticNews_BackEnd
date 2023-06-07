import { createService, findAllService } from "../services/news.service.js";

const create = async (req, res) => {
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
      user: {_id: "647e818c8d4548c4c63f6f62"}
    });

    res.sendStatus(201);
  } catch (error) {
    // Captura e trata qualquer erro
    console.error("Error creating news:", error);
    res.status(500).send({ message: "Error creating news" });
  }
};

const findAll = async (req, res) => {
  const news = await findAllService();
  
  if (news.length === 0) {
    return res.status(400).send({ message: "There are no registered news" });
  }

  res.send(news);
};

export {
  create,
  findAll,
};
