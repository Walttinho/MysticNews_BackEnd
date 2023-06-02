const express = require("express");
const userRoute = require("./src/routes/user.route");

const app = express();

app.use("/soma", userRoute);

// ROTA
// Method HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
// GET -  pega uma info
// POST - Cria uma info
// PUT - Altera toda a info
// PATH - Altera parte da info
// DELETE - Apaga uma info
// Name - um indentificador da rota
// Function (Callback) - responsável por executar algum comando

/*app.get('/', (req, res) => {
  const soma = 100+1;

  res.send({soma : soma})
})*/

app.listen(3000);
