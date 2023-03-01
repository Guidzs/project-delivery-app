import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { validateFieldsRegister } from '../utils/validations';
import axios from '../utils/connectionDatabase';

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
        .post('/register', { name, email, password, role: 'costumer' });

      localStorage.setItem('user', data);

      history.push('/customer/products');
    } catch (error) {
      console.log(error);
      setErrorEnabled(true);
    }
  };

  return (
    <div className="register">
      <input
        type="text"
        placeholder="name"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
        className="common_register__input-name"
        data-testid="common_register__input-name"
      />

      <input
        type="email"
        placeholder="email"
        value={ email }
        onChange={ ({ target }) => setEmail(target.value) }
        className="common_register__input-email"
        data-testid="common_register__input-email"
      />

      <input
        type="password"
        placeholder="password"
        value={ password }
        onChange={ ({ target }) => setPassword(target.value) }
        className="common_register__input-password"
        data-testid="common_register__input-password"
      />

      {/* O botão precisa habilitar e desabilitar */}

      <button
        type="button"
        onClick={ () => register() }
        disabled={ buttonDisabled }
        className="common_register__button-register"
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
  );
}
