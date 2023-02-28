import React, { useState } from 'react';
import { useHistory } from 'react-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  console.log(history);

  const login = () => {

  };

  return (
    <div className="register">
      <input
        type="text"
        value={ email }
        onChange={ ({ target }) => setEmail(target.value) }
        className="common_login__input-email"
        data-testid="common_login__input-email"
      />

      <input
        type="text"
        value={ password }
        onChange={ ({ target }) => setPassword(target.value) }
        className="common_login__input-password"
        data-testid="common_login__input-password"
      />

      {/* O botão precisa habilitar e desabilitar */}

      <button
        type="button"
        onClick={ () => login() }
        className="common_login__button-login"
        data-testid="common_login__button-login"
      >
        LOGIN
      </button>

      <button
        type="button"
        onClick={ () => history.push('/register') }
        className="common_login__button-register"
        data-testid="common_login__button-register"
      >
        AINDA NÃO TENHO CONTA
      </button>

      <p
        className="common_login__element-invalid-email"
        data-testid="common_login__element-invalid-email"
      >
        Mensagem de Erro!
      </p>
    </div>
  );
}
