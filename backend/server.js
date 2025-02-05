import { resolve } from 'path';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mainRoutes from './src/routes/mainRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import sqlConnection from './src/database/sqlConnection.js';
import User from './src/models/User.js';
import Character from './src/models/Character.js';
import Characteristic from './src/models/Characteristic.js';
import Inventory from './src/models/Inventory.js';
import Skills from './src/models/Skill.js';

const server = express();
const PORT = process.env.PORT || 8080;

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(resolve('./src/public')));

server.use(mainRoutes);
server.use('/user', userRoutes);

sqlConnection
  .sync({ logging: false })
  .then(() => {
    server.listen(PORT, console.log(`Server running at port: ${PORT}`));
  })
  .catch((err) => console.error(err));
