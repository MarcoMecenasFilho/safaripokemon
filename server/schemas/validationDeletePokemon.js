const Joi = require('joi');

const exclude = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': '400|Name  is not allowed to be empty',
    'any.required': '400|Name  is required',
  }),
});

module.exports = {
  exclude,
};