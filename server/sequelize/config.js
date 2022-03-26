require('dotenv').config();
module.exports = {
  development: {
    username: 'root',
    password: '39261171',
    database: 'pokemon_safari',
    host: 'localhost',
    dialect: 'mysql',
  },
  // development: {
  //   username: 'root',
  //   password: 'password',
  //   database: 'pokemon_safari',
  //   host: 'db',
  //   dialect: 'mysql',
  // },
  // test: {
  //   username: 'root',
  //   password: 'password',
  //   database: 'pokemon_safari_test',
  //   host: 'db',
  //   dialect: 'mysql',
  // },
    test: {
    username: 'root',
    password: '39261171',
    database: 'pokemon_safari_test',
    host: 'localhost',
    dialect: 'mysql',
  },
  // production: {
  //   username: 'root',
  //   password: null,
  //   database: 'database_production',
  //   host: '127.0.0.1',
  //   dialect: 'mysql',
  // },
};
