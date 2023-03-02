const validateUserFields = require('../utils/schema/userValitadion');
const HttpException = require('../utils/HttpError');

const validationUser = async (req, _res, next) => {
  const validate = validateUserFields(req.body);
  if (validate) {
    throw new HttpException(404, validate);
  }
  next();
};

module.exports = validationUser;
