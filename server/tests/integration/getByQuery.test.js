const frisby = require('frisby');
const { BASE_URL } = require('../helper/helpers');


describe('Test endpoint to search Pokemon by name', () => {
  
  it ('GET should return a status of 200 OK', function () {
    return frisby
      .get(`${BASE_URL}/pokemon/?namepokemon=charizard`)
      .expect('status', 200);
  });

  it ('GET should return a json with Pokemon information', function () {
    return frisby
      .get(`${BASE_URL}/pokemon/?namepokemon=charizard`)
      .expect('json', {
        "id": 6,
        "name": "Charizard",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
        });
  });

  it ('GET should return a json with  message when pokemon does not exist', function () {
    return frisby
      .get(`${BASE_URL}/pokemon/?namepokemon=butterfree`)
      .expect('json', {
        "message": "butterfree not found"
        });

})

});
