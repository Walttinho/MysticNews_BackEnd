import app from "./app.js";
import { config } from "./config.js";

// Inicia o servidor
app.listen(config.port, () =>
  console.log(`Server running on port ${config.port}`)
);