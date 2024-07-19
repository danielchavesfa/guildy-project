import { DataTypes } from 'sequelize';
import sqlConnection from '../database/sqlConnection.js';

const Characteristic = sqlConnection.define('characteristic', {
  lvl: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  exp: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  str: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 5,
  },
  cons: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 5,
  },
  agi: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 5,
  },
  int: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 5,
  },
  vit: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 100,
  },
  mana: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 100,
  },
  atk: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  def: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

export default Characteristic;
