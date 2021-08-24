require('dotenv').config(); //para obtener el puerto desde el archivo .env

const Server = require('./models/server');

// const express = require('express')
// const app = express()
 
// app.get('/', (req, res) => {
//   res.send('Hello World')
// })
 
// app.listen(process.env.PORT, () => {
//     console.log('servidor corriendo en puerto ', process.env.PORT)
// });

const server = new Server();

server.listen();
