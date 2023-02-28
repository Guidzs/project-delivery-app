const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().min(12).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const validateNewUserFields = (user) => {
  const { error } = userSchema.validate(user);
  if (error) return error.details[0].message;
};

module.exports = validateNewUserFields;
