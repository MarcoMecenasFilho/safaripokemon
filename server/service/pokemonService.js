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

  const exclude = async (name) => {
    const deletePokemon = await Pokemon.destroy({where: {name}})
    if(deletePokemon === 0) {
      return {code:404, message: `${name} does not exist in the database to be deleted`}
    }
    
    return {}
  }

module.exports = { getByQuery, create, exclude}