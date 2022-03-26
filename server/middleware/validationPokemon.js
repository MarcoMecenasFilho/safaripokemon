const {Pokemon} = require('../models')

const validationPokemonId = async (req, res, next) => {
  const {id} = req.body
const pokemonIdExist = await Pokemon.findOne({where: {id}})

if (pokemonIdExist ) {
  return res.status(409).json({message: 'Pokemon id already exists'})
}
next()
}

const validationPokemonName = async (req, res, next) => {
  const {name} = req.body
const pokemonNameExist = await Pokemon.findOne({where: {name}})

if (pokemonNameExist ) {
  return res.status(409).json({message: 'Pokemon name already exists'})
}
next()
}

module.exports = { validationPokemonId, validationPokemonName}