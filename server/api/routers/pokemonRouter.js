const express = require('express');
const { getByQuery, create, exclude } = require('../../controller/pokemonController');
const validationCreatePokemon = require('../../middleware/validationCreatePokemon');
const {validationPokemonId, validationPokemonName} = require('../../middleware/validationPokemon');
const validationDeletePokemon = require('../../middleware/validationDeletePokemon');

const router = express.Router();

router.get(
  '/',
  getByQuery,
);

router.post(
  '/',
  validationCreatePokemon,
  validationPokemonName,
  validationPokemonId,
  create,
);

router.delete(
  '/',
  validationDeletePokemon,
  exclude,
);

module.exports = router;