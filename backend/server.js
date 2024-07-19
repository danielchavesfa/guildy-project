import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const server = express();
const PORT = process.env.PORT || 8080;

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.listen(PORT, console.log('Server running at port:', PORT));
