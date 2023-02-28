const Joi = require('joi');

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const validateUserFields = (user) => {
  const { error } = userSchema.validate(user);
  if (error) return error.details[0].message;
};

module.exports = validateUserFields;
