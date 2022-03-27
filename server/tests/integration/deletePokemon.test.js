const frisby = require('frisby');
const shell = require('shelljs');
const { BASE_URL } = require('../helper/helpers');

describe('Test endpoint to delete Pokemon by name', () => {
  
    beforeEach(() => {
      shell.exec('npx sequelize-cli db:drop');
      shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate $');
      shell.exec('npx sequelize-cli db:seed:all $');
    });
  
    it('DELETE should return a status of 200 OK', function () {
      return frisby
        .fetch(`${BASE_URL}/pokemon`, {
          method: 'DELETE',
          body: JSON.stringify({
          name: "Bulbasaur"
        })
        })
        .expect('status', 204);
    });
  
  
    it('DELETE should return a json with message and status of 404, when pokemon does not exist in DB', function () {
      return frisby
      .fetch(`${BASE_URL}/pokemon`, {
        method: 'DELETE',
        body: JSON.stringify({
        name: "Butterfree"
      })
      })
        .expect('status', 404)
        .expect('json', {
          "message": "Butterfree does not exist in the database to be deleted"
        });
    });

    it('When the name is not passed', function () {
      return frisby
      .fetch(`${BASE_URL}/pokemon`, {
        method: 'DELETE',
        body: JSON.stringify({
      })
      })
        .expect('status', 400)
        .expect('json', {
          "message": "Name  is required"
        });
    });

    it('When the name is empty', function () {
      return frisby
      .fetch(`${BASE_URL}/pokemon`, {
        method: 'DELETE',
        body: JSON.stringify({
          name: ""
      })
      })
        .expect('status', 400)
        .expect('json', {
          "message": "Name  is not allowed to be empty"
        });
    });
  
})