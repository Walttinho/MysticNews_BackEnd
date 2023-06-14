import mongoose from "mongoose";
import { config } from "../config.js";

const connectDatabase = async () => {
  console.log("Wait connecting to the database");
  try {
    // Conecta ao banco de dados MongoDB utilizando a URL fornecida no arquivo de configuração
    // Connect to the MongoDB database using the URL provided in the config file
    await mongoose.connect(config.mongoDBUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
};

export default connectDatabase;
