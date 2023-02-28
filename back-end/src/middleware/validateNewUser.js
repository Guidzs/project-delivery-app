const validateNewUserFields = require('../utils/schema/validateNewUserFields');
const HttpException = require('../utils/HttpError');

const validationNewUser = async (req, res, next) => {
try {
  const validate = validateNewUserFields(req.body);
  if (validate) {
      throw new HttpException(401, validate);
  }
  next();
} catch (error) {
  const validate = validateNewUserFields(req.body);
  res.status(401).json({ message: validate });
}
};

module.exports = validationNewUser;
