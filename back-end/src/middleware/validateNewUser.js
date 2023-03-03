const validateNewUserFields = require('../utils/schema/validateNewUserFields');
const HttpException = require('../utils/HttpError');

const validationNewUser = async (req, _res, next) => {
  const validate = validateNewUserFields(req.body);
  if (validate) {
      throw new HttpException(401, validate);
  }
  next();
};

module.exports = validationNewUser;
