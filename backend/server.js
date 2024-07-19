import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mainRoutes from './src/routes/mainRoutes.js';

const server = express();
const PORT = process.env.PORT || 8080;

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(mainRoutes);

server.listen(PORT, console.log(`Server running at port: ${PORT}`));
