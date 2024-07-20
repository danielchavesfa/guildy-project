import { DataTypes } from 'sequelize';
import sqlConnection from '../database/sqlConnection.js';
import Character from './Character.js';

const User = sqlConnection.define('user', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasOne(Character);

export default User;
