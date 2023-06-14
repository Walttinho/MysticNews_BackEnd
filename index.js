import express from "express";
import connectDatabase from "./src/database/db.js";
import {config} from "./src/config/config.js";
import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";
import newsRoute from "./src/routes/news.route.js";

const app = express();

connectDatabase();

// Middleware para tratar erros
// Middleware to handle errors
app.use((err, req, res, next) => {
  // Lógica para tratar o erro
  // Logic to handle the error
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

// Middleware para fazer o parse do corpo das requisições para JSON
// Middleware to parse request bodies as JSON
app.use(express.json());

// Rotas
// Routes
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/news", newsRoute);

// Inicia o servidor
// Start the server
app.listen(config.port, () =>
  console.log(`Server running on port ${config.port}`)
);
