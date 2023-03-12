import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { validateFieldsRegister } from '../utils/validations';
import axios from '../utils/connectionDatabase';

export default function AdminRegisterNewUser({ handleUser }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('seller');

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errorEnabled, setErrorEnabled] = useState(false);

  useEffect(() => {
    const validate = async () => {
      try {
        await validateFieldsRegister.validate({ name: nome, password, email });
        setErrorEnabled(false);
        setButtonDisabled(false);
      } catch (_e) {
        setButtonDisabled(true);
      }
    };
    validate();
  }, [nome, password, email]);

  const register = async () => {
    try {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const response = await axios.post(
        '/admin/register/newuser',
        {
          name: nome,
          email,
          password,
          role: type,
        },
        { headers: { authorization: token } },
      );
      console.log(response);
      handleUser();
    } catch (error) {
      console.log(error);
      setErrorEnabled(true);
    }
  };

  const buttonClass = (buttonDisabled)
    ? 'app-admin__button-login app-admin__button-login-disabled'
    : 'app-admin__button-login';

  return (
    <>
      <div className="app-admin-manage__register">
        <label
          htmlFor="admin_manage__input-name"
          className="app-admin__field-label"
        >
          Nome
          <input
            id="admin_manage__input-name"
            type="text"
            placeholder="nome"
            className="app-admin__field"
            data-testid="admin_manage__input-name"
            onChange={ ({ target }) => setNome(target.value) }
            value={ nome }
          />
        </label>

        <label
          htmlFor="admin_manage__input-email"
          className="app-admin__field-label"
        >
          Email
          <input
            id="admin_manage__input-email"
            placeholder="email"
            type="email"
            className="app-admin__field"
            data-testid="admin_manage__input-email"
            onChange={ ({ target }) => setEmail(target.value) }
            value={ email }
          />
        </label>

        <label
          htmlFor="admin_manage__input-password"
          className="app-admin__field-label"
        >
          Senha
          <input
            id="admin_manage__input-password"
            className="app-admin__field"
            placeholder="senha"
            type="password"
            data-testid="admin_manage__input-password"
            onChange={ ({ target }) => setPassword(target.value) }
            value={ password }
          />
        </label>

        <label
          htmlFor="admin_manage__select-role"
          className="app-admin__field-label"
        >
          Tipo
          <select
            id="admin_manage__select-role"
            className="app-admin__field"
            data-testid="admin_manage__select-role"
            onChange={ ({ target }) => setType(target.value) }
          >
            <option value="seller">vendedor</option>
            <option value="customer">cliente</option>
          </select>
        </label>

        <button
          type="button"
          data-testid="admin_manage__button-register"
          onClick={ () => register() }
          className={ buttonClass }
          disabled={ buttonDisabled }
        >
          CADASTRAR
        </button>
      </div>
      {
        errorEnabled && (
          <p
            className="app-admin-manage__error-message"
            data-testid="admin_manage__element-invalid-register"
          >
            Dados Inválidos! Tente outro email ou senha.
          </p>
        )
      }
    </>
  );
}

AdminRegisterNewUser.propTypes = {
  handleUser: PropTypes.string.isRequired,
};
