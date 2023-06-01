const express = require('express')
const app = express()

// ROTA
  // Method HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
    // GET -  pega uma info
    // POST - Cria uma info
    // PUT - Altera toda a info
    // PATH - Altera parte da info
    // DELETE - Apaga uma info
  // Name - um indentificador da rota
  // Function (Callback) - responsável por executar algum comando

app.get('/', (req, res) => {
  res.send('testando hello world!!!')
})

app.listen(3000)