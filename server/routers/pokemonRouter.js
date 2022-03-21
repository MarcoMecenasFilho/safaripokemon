const express = require('express');
const { getByQuery } = require('../controller/pokemonController');
const validationCreatePokemon = require('../middleware/validationCreatePokemon');
const {validationPokemonId, validationPokemonName} = require('../middleware/validationPokemon');
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
  exclude,
);

module.exports = router;