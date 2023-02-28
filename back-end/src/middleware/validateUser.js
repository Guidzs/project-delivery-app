const validateUserFields = require('../utils/schema/userValitadion');

const validationUser = async (req, _res, next) => {
   const validate = validateUserFields(req.body);
  if (validate) {
      throw new Error(404, validate);
  }
  next();
};

module.exports = validationUser;
