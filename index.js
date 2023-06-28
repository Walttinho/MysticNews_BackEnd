import express from "express";
import cors from 'cors'
/* import connectDatabase from "./src/database/db.js"; */
import { config, connectDatabase } from "./config.js";

import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";
import newsRoute from "./src/routes/news.route.js";
import swaggerRoute from "./src/routes/swagger.route.cjs";

const port = config.port;
const app = express();

connectDatabase();

app.use(cors())

// Middleware para fazer o parse do corpo das requisições para JSON
app.use(express.json());

// Middleware para tratar erros
app.use((err, req, res, next) => {
  // Lógica para tratar o erro
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

// Rotas
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/news", newsRoute);
app.use("/doc", swaggerRoute);

// Inicia o servidor
app.listen(config.port, () =>
  console.log(`Server running on port ${config.port}`)
);
