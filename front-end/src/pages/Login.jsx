import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import axios from '../utils/connectionDatabase';
import { validateFieldsLogin } from '../utils/validations';
import './Login.css';
import context from '../context/Context';
import magico from '../images/magico.jpg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [helpDev, setHelpDev] = useState(false);
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
      console.log('amigo estou aqui');
      const response = await axios.post('/login', { email, password });
      console.log(response);

      const { data } = response;

      localStorage.setItem('user', JSON.stringify(data));
      const { role } = JSON.parse(localStorage.getItem('user'));

      switch (role) {
      case 'administrator':
        history.push('/admin/manage');
        break;
      case 'customer':
        history.push('/customer/products');
        break;
      case 'seller':
        history.push('seller/orders');
        break;
      default:
        console.log('erro!');
        setErrorEnabled(true);
      }
    } catch (error) {
      console.log('Amigo Estou aqui!!!');
      setErrorEnabled(true);
    }
  };

  const buttonLoginDisabledClass = (disabledButton)
    ? 'app-login__button-login-disabled' : '';

  return (
    <>
      <div className="app-login__full-screen">
        <div className="app-login">
          <label
            htmlFor="common_login__input-email"
            className="app-login__field-label"
          >
            Login
            <input
              id="common_login__input-email"
              type="text"
              placeholder="email"
              value={ email }
              onChange={ ({ target }) => setEmail(target.value) }
              className="app-login__field"
              data-testid="common_login__input-email"
            />
          </label>

          <label
            htmlFor="common_login__input-password"
            className="app-login__field-label"
          >
            Senha
            <input
              id="common_login__input-password"
              type="password"
              placeholder="password"
              value={ password }
              onChange={ ({ target }) => setPassword(target.value) }
              className="app-login__field"
              data-testid="common_login__input-password"
            />
          </label>

          {/* O botão precisa habilitar e desabilitar */}

          <button
            type="button"
            onClick={ () => login() }
            disabled={ disabledButton }
            className={ `app-login__button-login ${buttonLoginDisabledClass}` }
            data-testid="common_login__button-login"
          >
            Login
          </button>

          <button
            type="button"
            onClick={ () => history.push('/register') }
            className="app-login__button-register"
            data-testid="common_login__button-register"
          >
            Ainda Não Tenho Conta
          </button>

        </div>
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
      </div>
      <button
        type="button"
        className="help-dev-button"
        onClick={ () => setHelpDev(!helpDev) }
      >
        CLICK DA MÁGICA
      </button>
      { (helpDev) && (
        <div className="help-dev-row">
          <div className="help-dev-magica">
            <img src={ magico } alt="magica" />
          </div>
          <div className="help-dev-content">
            <div className="help-dev-content-item">
              <h3>Admin</h3>
              <p>adm@deliveryapp.com</p>
              <p>--adm2@21!!--</p>
            </div>
            <div className="help-dev-content-item">
              <h3>Seller</h3>
              <p>fulana@deliveryapp.com</p>
              <p>fulana@123</p>
            </div>
            <div className="help-dev-content-item">
              <h3>Customer</h3>
              <p>zebirita@email.com</p>
              <p>$#zebirita#$</p>
            </div>
          </div>
        </div>
      ) }
    </>
  );
}
