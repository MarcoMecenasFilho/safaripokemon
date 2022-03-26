require('dotenv').config();
module.exports = {
  // development: {
  //   username: 'root',
  //   password: '39261171',
  //   database: 'pokemon_safari',
  //   host: 'localhost',
  //   dialect: 'mysql',
  // },
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'pokemon_safari',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    database: 'pokemon_safari-test',
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  //   test: {
  //   username: 'root',
  //   password: '39261171',
  //   database: 'pokemon_safari_test',
  //   host: 'localhost',
  //   dialect: 'mysql',
  // },
  // production: {
  //   username: 'root',
  //   password: null,
  //   database: 'database_production',
  //   host: '127.0.0.1',
  //   dialect: 'mysql',
  // },
};
