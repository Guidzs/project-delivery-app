import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import context from '../context/Context';
import axios from '../utils/connectionDatabase';
import { validateFieldsLogin } from '../utils/validations';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const [disabledButton, setDisabledButton] = useState(true);
  const [errorEnabled, setErrorEnabled] = useState(false);

  const { RedirectUserByLogin } = useContext(context);

  useEffect(() => {
    RedirectUserByLogin(history);
  }, [null]);

  useEffect(
    () => {
      const validate = async () => {
        try {
          await validateFieldsLogin.validate({ password, email });
          setErrorEnabled(false);
          setDisabledButton(false);
        } catch (error) {
          setDisabledButton(true);
        }
      };
      validate();
    },
    [email, password],
  );

  const login = async () => {
    try {
      const response = await axios.post('/login', { email, password });
      console.log(response);

      const { data } = response;

      localStorage.setItem('user', JSON.stringify(data));
      const { role } = JSON.parse(localStorage.getItem('user'));
      if (role === 'customer') {
        history.push('/customer/products');
      }
      if (role === 'seller') {
        history.push('/seller/orders');
      }
    } catch (error) {
      setErrorEnabled(true);
    }
  };

  return (
    <div className="register">
      <input
        type="text"
        placeholder="email"
        value={ email }
        onChange={ ({ target }) => setEmail(target.value) }
        className="common_login__input-email"
        data-testid="common_login__input-email"
      />

      <input
        type="password"
        placeholder="password"
        value={ password }
        onChange={ ({ target }) => setPassword(target.value) }
        className="common_login__input-password"
        data-testid="common_login__input-password"
      />

      {/* O botão precisa habilitar e desabilitar */}

      <button
        type="button"
        onClick={ () => login() }
        disabled={ disabledButton }
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

      {
        (errorEnabled) && (
          <p
            className="common_login__element-invalid-email"
            data-testid="common_login__element-invalid-email"
          >
            Usuário inválido! Tente novamente.
          </p>
        )
      }

      <hr />
      <h3>Admin</h3>
      <p>email: adm@deliveryapp.com</p>
      <p>senha: --adm2@21!!--</p>

      <hr />
      <h3>Seller</h3>
      <p>email: fulana@deliveryapp.com</p>
      <p>senha: fulana@123</p>

      <hr />
      <h3>Customer</h3>
      <p>email: zebirita@email.com</p>
      <p>senha: $#zebirita#$</p>

    </div>
  );
}
