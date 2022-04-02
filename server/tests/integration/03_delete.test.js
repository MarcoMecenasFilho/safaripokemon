const frisby = require('frisby');
const { BASE_URL } = require('../helper/helpers');
const newPokemon = {
  name: "Butterfree",
  id: 12,
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
}

describe('Test endpoint to delete Pokemon by name', () => {
  
    it('DELETE should return a status of 200 OK', async () => {
      await frisby.post(`${BASE_URL}/pokemon`, newPokemon)
      

      await frisby.fetch(`${BASE_URL}/pokemon`, {
          method: 'DELETE',
          body: JSON.stringify({
          name: "Butterfree"
        })
        })
        .expect('status', 204);

    });
  
  
    it('DELETE should return a json with message and status of 404, when pokemon does not exist in DB',  () => {

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
})

describe('Test validation delete Pokemon ', () => {

  it('When the name is not passed', () => {
    return frisby
    .fetch(`${BASE_URL}/pokemon`, {
      method: 'DELETE',
      body: JSON.stringify({
    })
    })
      .expect('status', 400)
      .expect('json', {
        "message": "Name is required"
      });
  });

  it('When the name is empty', () => {
    return frisby
    .fetch(`${BASE_URL}/pokemon`, {
      method: 'DELETE',
      body: JSON.stringify({
        name: ""
    })
    })
      .expect('status', 400)
      .expect('json', {
        "message": "Name is not allowed to be empty"
      });
  });

})