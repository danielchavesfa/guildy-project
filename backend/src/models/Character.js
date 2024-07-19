import { DataTypes } from 'sequelize';
import sqlConnection from '../database/sqlConnection.js';
import User from './User.js';

const Character = sqlConnection.define('character', {
  nickname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img_url: {
    type: DataTypes.STRING,
  },
  race: {
    type: DataTypes.STRING,
  },
  class: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  weight: {
    type: DataTypes.INTEGER,
  },
  height: {
    type: DataTypes.INTEGER,
  },
  story: {
    type: DataTypes.TEXT,
  },
  relationship: {
    type: DataTypes.STRING,
  },
});

export default Character;
