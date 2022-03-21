const {Pokemon} = require('../models')

const getByQuery = async (namePokemon) => {
  try {
    const pokemon = await Pokemon.findOne({where: {name: namePokemon}});
    return pokemon; 
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getByQuery}