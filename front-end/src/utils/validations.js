const Yup = require('yup');

const min = 6;

const validateFieldsLogin = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(min).required(),
});

module.exports = validateFieldsLogin;
