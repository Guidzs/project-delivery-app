const Yup = require('yup');

const minPassword = 6;
const minName = 12;

const validateFieldsLogin = Yup.object().shape({
  email: Yup.string().matches(/^([\w-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w-]{2,3})$/).required(),
  password: Yup.string().min(minPassword).required(),
});

const validateFieldsRegister = Yup.object().shape({
  email: Yup.string().matches(/^([\w-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w-]{2,3})$/).required(),
  password: Yup.string().min(minPassword).required(),
  name: Yup.string().min(minName).required(),
});

module.exports = {
  validateFieldsLogin,
  validateFieldsRegister,
};
