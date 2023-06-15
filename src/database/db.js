import mongoose from "mongoose";
<<<<<<< HEAD
import  {config}  from "../../config.js";
=======
import {config} from "../config/config.js";

>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
const connectDatabase = async () => {
  console.log("Wait connecting to the database");
  try {
  
    // Conecta ao banco de dados MongoDB utilizando a URL fornecida no arquivo de configuração
<<<<<<< HEAD
   
=======
    // Connect to the MongoDB database using the URL provided in the config file
>>>>>>> c4d61ee70c04b90e5991deea58aa75604acf76e1
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
