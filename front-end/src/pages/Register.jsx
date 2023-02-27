import React, { useState, useContext } from 'react';
import context from '../context/Context';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { history } = useContext(context);

  console.log(history); // apenas para o react não reclamar - LOGO LOGO REMOVER

  const register = () => {

  };

  return (
    <div className="register">
      <input
        type="text"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
        className="common_register__input-name"
        data-testid="common_register__input-name"
      />

      <input
        type="text"
        value={ email }
        onChange={ ({ target }) => setEmail(target.value) }
        className="common_register__input-email"
        data-testid="common_register__input-email"
      />

      <input
        type="text"
        value={ password }
        onChange={ ({ target }) => setPassword(target.value) }
        className="common_register__input-password"
        data-testid="common_register__input-password"
      />

      {/* O botão precisa habilitar e desabilitar */}

      <button
        type="button"
        onClick={ () => register() }
        className="common_register__button-register"
        data-testid="common_register__button-register"
      >
        CADASTRAR
      </button>

      <p
        className="common_register__element-invalid_register"
        data-testid="common_register__element-invalid_register"
      >
        Mensagem de Erro!
      </p>
    </div>
  );
}
