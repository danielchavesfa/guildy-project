import express from 'express';

const server = express();
const PORT = process.env.PORT || 8080;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.listen(PORT, console.log('Server running at port:', PORT));
