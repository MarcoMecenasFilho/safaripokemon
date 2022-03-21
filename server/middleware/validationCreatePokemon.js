const validationCreatePokemon = require('../schemas/validationCreatePokemon');

module.exports = async (req, res, next) => {
  try {
    
  const { error } = validationCreatePokemon.create.validate(req.body);
  
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  next();
  } catch (e) {
    next(e);
  }
};