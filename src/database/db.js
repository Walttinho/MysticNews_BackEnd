const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Wait connecting to the database");
  mongoose
    .connect(
      "mongodb+srv://Walttinho:W@ltinho0o@cluster0.q5hhxfs.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
