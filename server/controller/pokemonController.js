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

const create = async (req, res, next) => {
  try {
    const newPokemon = await pokemonService.create(req.body)

    return res.status(201).json(newPokemon)
  
  } catch (error) {
    next(error)
  }
}

const exclude = async (req, res, next) => {
  try {
    const {name} = req.body
    const deletePokemon =   await pokemonService.exclude(name)
    const {message, code} = deletePokemon
    if(message) {
      return res.status(code).json({message})
    }
      return res.status(204).end()
  } catch (error) {
    next(error)
  }
}


module.exports = {getByQuery, create, exclude}
