const validateUserFields = require('../utils/schema/userValitadion');
const HttpException = require('../utils/HttpError');

const validationUser = async (req, res, next) => {
try {
  const validate = validateUserFields(req.body);
  if (validate) {
      throw new HttpException(404, validate);
  }
  next();
} catch (error) {
  const validate = validateUserFields(req.body);
  res.status(500).json({message: validate })
}

};

module.exports = validationUser;
