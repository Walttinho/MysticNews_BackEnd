import app from "./app";
import { config } from "./config";

// Inicia o servidor
app.listen(config.port, () =>
  console.log(`Server running on port ${config.port}`)
);