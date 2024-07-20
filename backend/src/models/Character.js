import { DataTypes } from 'sequelize';
import sqlConnection from '../database/sqlConnection.js';
import Characteristic from './Characteristic.js';
import Skill from './Skill.js';
import Inventory from './Inventory.js';

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

Character.hasOne(Characteristic, { foreignKey: 'characterId', onDelete: 'CASCADE' });
Character.hasOne(Skill, { foreignKey: 'characterId', onDelete: 'CASCADE' });
Character.hasOne(Inventory, { foreignKey: 'characterId', onDelete: 'CASCADE' });

export default Character;
