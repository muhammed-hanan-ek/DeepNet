require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./dbConnations/connection')
const Router = require('./Routes/router');


const server=express();

server.use(cors());
server.use(express.json());
server.use(Router);



const PORT = process.env.PORT || 3000;


server.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT} and waiting for client request`);
});


server.get('/', (req, res) => {
    res.status(200).send('<h1 style="color:blue;">server started and waiting for client request!!!</h1>');
});