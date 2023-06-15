import express from "express";
import connectDatabase from "./src/database/db.js";
import { config } from "./config.js";

import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";
import newsRoute from "./src/routes/news.route.js";

const port = config.port;
const app = express();

connectDatabase();

// Middleware para tratar erros
app.use((err, req, res, next) => {
  // Lógica para tratar o erro
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

// Middleware para fazer o parse do corpo das requisições para JSON
app.use(express.json());

// Rotas
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/news", newsRoute);

// Inicia o servidor
app.listen(config.port, () =>
  console.log(`Server running on port ${config.port}`)
);
