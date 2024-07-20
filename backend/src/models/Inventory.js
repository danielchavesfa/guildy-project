import { DataTypes } from 'sequelize';
import sqlConnection from '../database/sqlConnection.js';

const Inventory = sqlConnection.define('inventory', {
  itemId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Inventory;
