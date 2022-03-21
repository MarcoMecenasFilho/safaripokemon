const {Pokemon} = require('../models')

const getByQuery = async (namePokemon) => {
  try {
    const pokemon = await Pokemon.findOne({where: {name: namePokemon}});
    return pokemon; 
  } catch (error) {
    console.log(error)
  }
}

const create = async (infosPokemon) => {
  const {id, name, image} = infosPokemon
  
  const newPokemon = await Pokemon.create({id, name, image})
  
  return newPokemon
  }

module.exports = { getByQuery, create}