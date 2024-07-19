import { DataTypes } from 'sequelize';
import sqlConnection from '../database/sqlConnection.js';

const Skills = sqlConnection.define('skill', {
  skillId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Skills;
