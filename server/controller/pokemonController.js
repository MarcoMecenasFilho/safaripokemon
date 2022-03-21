const pokemonService = require('../service/pokemonService')

const getByQuery = async ( req, res, next) => {
  try {
    const {namepokemon} = req.query;
    const getPokemon = await pokemonService.getByQuery(namepokemon);
    if(!getPokemon) {
      return res.status(404).json({message: 'Pokemon not found'})
    }
    return res.status(200).json(getPokemon)
  } catch (error) {
    next(error) 
  }
}



module.exports = {getByQuery}
