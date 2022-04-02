const {Pokemon} = require('../../models/index')
const frisby = require('frisby');
const { BASE_URL } = require('../helper/helpers');
const newPokemon = {
  name: "Butterfree",
  id: 12,
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
}

describe('Test endpoint to search Pokemon by name',  () => {

  it ('GET should return a status of 200 OK', async  () => {

    await frisby.fetch(`${BASE_URL}/pokemon`, {
      method: 'DELETE',
      body: JSON.stringify({
      name: "Butterfree"
      })
    })

    await frisby.post(`${BASE_URL}/pokemon`, newPokemon)
    
    await frisby
      .get(`${BASE_URL}/pokemon/?namepokemon=Butterfree`)
      .expect('status', 200);
  });

  it ('GET should return a json with Pokemon information', async () => {
    await frisby
      .get(`${BASE_URL}/pokemon/?namepokemon=Butterfree`)
      .expect('json', newPokemon);

      await frisby.fetch(`${BASE_URL}/pokemon`, {
        method: 'DELETE',
        body: JSON.stringify({
        name: "Butterfree"
        })
      });
  });

  
  it ('GET should return a json with  message when pokemon does not exist', async () => {
    await frisby.fetch(`${BASE_URL}/pokemon`, {
      method: 'DELETE',
      body: JSON.stringify({
      name: "Butterfree"
      })
    })

    
    return frisby
      .get(`${BASE_URL}/pokemon/?namepokemon=Butterfree`)
      .expect('json', {
        "message": "Butterfree not found"
        });

  })


});
