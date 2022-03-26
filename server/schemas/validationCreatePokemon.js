const Joi = require('joi');

const create = Joi.object({
  id: Joi.number().integer().positive().required().strict().messages({
    'number.base': '422|Id must be a number',
    'number.integer': '422|Id must be integer',
    'number.positive': '422|Id must be greater than or equal to 1',
    'any.required': '400|Id is required',
  }),
  name: Joi.string().required().messages({
    'string.empty': '400|Name is not allowed to be empty',
    'any.required': '400|Name is required',
  }),
  image: Joi.string().required().messages({
    'string.empty': '400|Image is not allowed to be empty',
    'any.required': '400|Image is required',
  }),

});

module.exports = {
  create,
};