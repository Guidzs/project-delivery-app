import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { validateFieldsRegister } from '../utils/validations';
import axios from '../utils/connectionDatabase';
import './Register.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errorEnabled, setErrorEnabled] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const validate = async () => {
      try {
        await validateFieldsRegister.validate({ name, password, email });
        setErrorEnabled(false);
        setButtonDisabled(false);
      } catch (_e) {
        setButtonDisabled(true);
      }
    };
    validate();
  }, [name, password, email]);

  const register = async () => {
    try {
      const { data } = await axios
        .post('/register', { name, email, password, role: 'customer' });

      localStorage.setItem('user', JSON.stringify(data));

      history.push('/customer/products');
    } catch (error) {
      console.log(error);
      setErrorEnabled(true);
    }
  };

  const buttonLoginDisabledClass = (buttonDisabled)
    ? 'app-login__button-login-disabled' : '';

  return (
    <div className="app-login__full-screen">
      <div className="app-register">
        <label
          htmlFor="common_register__input-name"
          className="app-login__field-label"
        >
          Nome
          <input
            id="common_register__input-name"
            type="text"
            placeholder="name"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
            className="app-login__field"
            data-testid="common_register__input-name"
          />
        </label>

        <label
          htmlFor="common_register__input-email"
          className="app-login__field-label"
        >
          Email
          <input
            id="common_register__input-email"
            type="email"
            placeholder="email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
            className="app-login__field"
            data-testid="common_register__input-email"
          />
        </label>

        <label
          htmlFor="common_register__input-password"
          className="app-login__field-label"
        >
          Senha
          <input
            id="common_register__input-password"
            type="password"
            placeholder="password"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
            className="app-login__field"
            data-testid="common_register__input-password"
          />
        </label>

        <button
          type="button"
          onClick={ () => register() }
          disabled={ buttonDisabled }
          className={ `app-login__button-login ${buttonLoginDisabledClass}` }
          data-testid="common_register__button-register"
        >
          CADASTRAR
        </button>

        {
          (errorEnabled) && (
            <p
              className="common_register__element-invalid_register"
              data-testid="common_register__element-invalid_register"
            >
              Dados Inválidos! Tente outro email ou senha.
            </p>
          )
        }
      </div>
    </div>
  );
}
