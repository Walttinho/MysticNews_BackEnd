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
  deleteNewsLikedService,
  addCommentNewsService,
  delCommentNewsService,
} from "../services/news.service.js";

// Função para criar uma nova notícia
// Function to create a new news
export const create = async (req, res) => {
<<<<<<< HEAD
  try {
    const { title, text, banner } = req.body;
// Verifica se todos os campos obrigatórios foram fornecidos
    if (!title || !banner || !text) {
      res.send(400).send({
        message: "Submit all fields for registration",
      });
    }
 // Cria a notícia usando o serviço de criação de notícias
    await createService({
      title,
      text,
      banner,
      user: req.userId,
    });

 // Retorna a resposta com a notícia criada
    res.status(201).send({
      message: "News created successfully",
      news,
    });
  } catch (error) {
    // Captura e trata qualquer erro
    console.error("Error creating news:", error);
    res.status(500).send({ message: "Error creating news" });
=======
  const { title, content, author } = req.body;

  // Verifica se todos os campos obrigatórios foram fornecidos
  // Checks if all required fields were provided
  if (!title || !content || !author) {
    return res
      .status(400)
      .send({ message: "Submit all fields for news creation" });
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
  }

<<<<<<< HEAD
// Função para obter todas as notícias
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

    // Obtém todas as notícias usando o serviço de busca de todas as notícias

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
    console.error("Error finding news:", error);
    res.status(500).send({ message: "Error finding news" });
  }
};

// Função para obter as notícias mais populares
export const topNews = async (req, res) => {
  try {
    const news = await topNewsService();
=======
  try {
    // Cria a notícia usando o serviço de criação de notícias
    // Creates the news using the news creation service
    const news = await newsService.createService(req.body);
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1

    if (!news) {
      return res
        .status(400)
        .send({ message: "Failed to perform the operation" });
    }

    // Retorna a resposta com a notícia criada
    // Returns the response with the created news
    res.status(201).send({
      message: "News created successfully",
      news,
    });
  } catch (error) {
    // Captura e trata qualquer erro
    // Catches and handles any errors
    console.error("Error creating news:", error);
    res.status(500).send({ message: "Failed to perform the operation" });
  }
};

// Função para obter todas as notícias
// Function to get all news
export const findAll = async (req, res) => {
  try {
    // Obtém todas as notícias usando o serviço de busca de todas as notícias
    // Gets all news using the service to find all news
    const news = await newsService.findAllService();

    if (news.length === 0) {
      return res.status(400).send({ message: "There are no registered news" });
    }

    // Retorna a resposta com todas as notícias
    // Returns the response with all news
    res.send(news);
  } catch (error) {
    // Captura e trata qualquer erro
<<<<<<< HEAD
    console.error("Error finding top news:", error);
    res.status(500).send({ message: "Error finding top news" });
  }
};

// Função para obter uma notícia pelo ID
export const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await findByIdService(id);
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
    console.error("Error finding news:", error);
    res.status(500).send({ message: "Error finding news" });
  }
};

// Função para buscar notícias por título
export const searchByTitle = async (req, res) => {
  try {
    const { title } = req.query;
    const news = await searchByTitleService(title);
=======
    // Catches and handles any errors
    console.error("Error finding news:", error);
    res.status(500).send({ message: "Failed to perform the operation" });
  }
};

// Função para obter as notícias mais populares
// Function to get top news
export const topNews = async (req, res) => {
  try {
    // Obtém as notícias mais populares usando o serviço de busca de notícias mais populares
    // Gets the top news using the service to find top news
    const news = await newsService.topNewsService();
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1

    if (news.length === 0) {
      return res
        .status(400)
<<<<<<< HEAD
        .send({ message: "No news found with the given title" });
=======
        .send({ message: "There are no top news available" });
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
    }

    // Retorna a resposta com as notícias mais populares
    // Returns the response with the top news
    res.send(news);
  } catch (error) {
    // Captura e trata qualquer erro
<<<<<<< HEAD
    console.error("Error searching news:", error);
    res.status(500).send({ message: "Error searching news" });
  }
};

// Função para buscar notícias por usuário
=======
    // Catches and handles any errors
    console.error("Error finding top news:", error);
    res.status(500).send({ message: "Failed to perform the operation" });
  }
};

// Função para obter uma notícia pelo ID
// Function to get a news by ID
export const findById = async (req, res) => {
  try {
    const news = req.news;
    res.send(news);
  } catch (error) {
    // Captura e trata qualquer erro
    // Catches and handles any errors
    console.error("Error finding news:", error);
    res.status(500).send({ message: "Failed to perform the operation" });
  }
};

// Função para buscar notícias por título
// Function to search news by title
export const searchByTitle = async (req, res) => {
  const { title } = req.query;

  // Verifica se o parâmetro de pesquisa foi fornecido
  // Checks if the search parameter was provided
  if (!title) {
    return res.status(400).send({ message: "Search parameter is required" });
  }

  try {
    // Busca as notícias pelo título usando o serviço de busca por título
    // Searches for news by title using the service to search by title
    const news = await newsService.searchByTitleService(title);

    if (news.length === 0) {
      return res
        .status(400)
        .send({ message: "No news found with the given title" });
    }

    // Retorna a resposta com as notícias encontradas
    // Returns the response with the found news
    res.send(news);
  } catch (error) {
    // Captura e trata qualquer erro
    // Catches and handles any errors
    console.error("Error searching news:", error);
    res.status(500).send({ message: "Failed to perform the operation" });
  }
};

// Função para buscar notícias por usuário
// Function to search news by user
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
export const byUser = async (req, res) => {
  const userId = req.user.id;

  try {
    // Busca as notícias pelo usuário usando o serviço de busca por usuário
    // Searches for news by user using the service to search by user
    const news = await newsService.searchByUserService(userId);

    if (news.length === 0) {
      return res
        .status(400)
        .send({ message: "No news found for the given user" });
    }

    // Retorna a resposta com as notícias encontradas
    // Returns the response with the found news
    res.send(news);
  } catch (error) {
    // Captura e trata qualquer erro
<<<<<<< HEAD
    console.error("Error searching news by user:", error);
    res.status(500).send({ message: "Error searching news by user:" });
  }
};
// Função para atualizar uma notícia
=======
    // Catches and handles any errors
    console.error("Error searching news by user:", error);
    res.status(500).send({ message: "Failed to perform the operation" });
  }
};

// Função para atualizar uma notícia
// Function to update a news
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
export const updateNews = async (req, res) => {
  const { title, content } = req.body;

  // Verifica se algum campo foi preenchido
  // Checks if any field was filled
  if (!title && !content) {
    return res
      .status(400)
      .send({ message: "Submit at least one field for update" });
  }

  try {
    const { id } = req.params;

<<<<<<< HEAD
    if (!title && !banner && !text) {
      return res
      .status(400)
      .send({ message: "Submit at least one field for update" });
    }

    const news = await findByIdSdervice(id);

    if (news.user.id != req.userId) {
      return res.status(400).send({ message: error.message });
    }

    await updateNewsService(id, title, text, banner);
    return res.send({ message: "News successfully updated" });
  } catch (error) {
    // Captura e trata qualquer erro
    console.error("Error updating news:", error);
    res.status(500).send({ message: "Error updating news" });
=======
    // Atualiza a notícia usando o serviço de atualização de notícias
    // Updates the news using the news update service
    await newsService.updateService(id, title, content);

    // Retorna a resposta de sucesso
    // Returns success response
    res.send({ message: "News successfully updated" });
  } catch (error) {
    // Captura e trata qualquer erro
    // Catches and handles any errors
    console.error("Error updating news:", error);
    res.status(500).send({ message: "Failed to perform the operation" });
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
  }
};

// Função para deletar uma notícia
<<<<<<< HEAD
export const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await findByIdSdervice(id);
=======
// Function to delete a news
export const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1

    // Deleta a notícia usando o serviço de deleção de notícias
    // Deletes the news using the news deletion service
    await newsService.deleteService(id);

<<<<<<< HEAD
    await deleteNewsService(id);
    res.send({ message: "News successfully deleted" });
  } catch (error) {
    // Captura e trata qualquer erro
    console.error("Error deleting news:", error);
    res.status(500).send({ message: "Error deleting news" });
=======
    // Retorna a resposta de sucesso
    // Returns success response
    res.send({ message: "News successfully deleted" });
  } catch (error) {
    // Captura e trata qualquer erro
    // Catches and handles any errors
    console.error("Error deleting news:", error);
    res.status(500).send({ message: "Failed to perform the operation" });
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
  }
};

// Função para dar like em uma notícia
<<<<<<< HEAD
=======
// Function to like a news
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
export const likeNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;

    // Verifica se o usuário já curtiu a notícia
    // Checks if the user has already liked the news
    const newsLiked = await newsService.checkLikedService(id, userId);

    if (newsLiked) {
      // Remove o like na notícia usando o serviço de remoção de like de notícias
      // Removes the like from the news using the news unlike service
      await newsService.deleteNewsLikedService(id, userId);

      // Retorna a resposta de sucesso com a mensagem indicando que o like foi removido
      // Returns the success response with a message indicating that the like was removed
      return res.status(200).send({ message: "Like successfully removed" });
    }

    // Dá like na notícia usando o serviço de like de notícias
    // Likes the news using the news like service
    await newsService.likeService(id);

    // Retorna a resposta de sucesso
    // Returns success response
    res.send({ message: "News liked successfully" });
  } catch (error) {
    // Captura e trata qualquer erro
<<<<<<< HEAD
    console.error("Error liking news:", error);
    res.status(500).send({ message: "Error liking news" });
=======
    // Catches and handles any errors
    console.error("Error liking news:", error);
    res.status(500).send({ message: "Failed to perform the operation" });
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
  }
};

// Função para adicionar um comentário em uma notícia
<<<<<<< HEAD
=======
// Function to add a comment to a news
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
export const addCommentNews = async (req, res) => {
  const { comment } = req.body;

  // Verifica se o comentário foi fornecido
  // Checks if the comment was provided
  if (!comment) {
    return res.status(400).send({ message: "Comment is required" });
  }

  try {
    const { id } = req.params;

<<<<<<< HEAD
    if (!comment) {
      return res.status(400).send({ message: "Comment is required" });
    }

    await addCommentNewsService(id, comment, userId);

    res.send({ message: "Comment added successfully" });
  } catch (error) {
    // Captura e trata qualquer erro
    console.error("Error adding comment:", error);
    res.status(500).send({ message: "Error adding comment" });
  }
};

// Função para deletar um comentário em uma notícia
export const delCommentNews = async (req, res) => {
  try {
    const { idNews, idComment } = req.params;
    const userId = req.userId;

    const commentDeleted = await delCommentNewsService(
      idNews,
      idComment,
      userId
    );

    const commentFinder = commentDeleted.comments.find(
      (comment) => comment.idComment === idComment
    );
    console.log(commentFinder);
    console.log(commentFinder.userId, userId);
    if (!commentFinder) {
      return res.status(404).send({ message: "Comment not found" });
    }

    if (commentFinder.userId != userId) {
      return res.status(400).send({ message: "You can't delete this comment" });
    }

    res.send({ message: "Comment deleted successfully" });
  } catch (error) {
    // Captura e trata qualquer erro
    console.error("Error deleting comment:", error);
    res.status(500).send({ message: "Error deleting comment" });
=======
    // Adiciona o comentário na notícia usando o serviço de adição de comentários
    // Adds the comment to the news using the comment addition service
    await newsService.addCommentService(id, comment);

    // Retorna a resposta de sucesso
    // Returns success response
    res.send({ message: "Comment added successfully" });
  } catch (error) {
    // Captura e trata qualquer erro
    // Catches and handles any errors
    console.error("Error adding comment:", error);
    res.status(500).send({ message: "Failed to perform the operation" });
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
  }
};

// Função para deletar um comentário em uma notícia
// Function to delete a comment from a news
export const delCommentNews = async (req, res) => {
  try {
    const { idNews, idComment } = req.params;

    // Deleta o comentário na notícia usando o serviço de deleção de comentários
    // Deletes the comment from the news using the comment deletion service
    await newsService.deleteCommentService(idNews, idComment);

    // Retorna a resposta de sucesso
    // Returns success response
    res.send({ message: "Comment deleted successfully" });
  } catch (error) {
    // Captura e trata qualquer erro
    // Catches and handles any errors
    console.error("Error deleting comment:", error);
    res.status(500).send({ message: "Failed to perform the operation" });
  }
};


