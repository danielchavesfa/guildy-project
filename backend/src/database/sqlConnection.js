import { Sequelize } from 'sequelize';

const { SQL_DATABASE, SQL_USERNAME, SQL_PASSWORD } = process.env;
const sequelize = new Sequelize(SQL_DATABASE, SQL_USERNAME, SQL_PASSWORD, {
  dialect: 'mysql',
  host: 'localhost',
});

export default sequelize;
