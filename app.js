import express from "express";
import cors from "cors";
import { connectDatabase } from "./config.js";
import router from "./src/routes/index.js";

const app = express();

connectDatabase();
app.use(cors());
app.use(express.json());
app.use(router);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

export default app;
