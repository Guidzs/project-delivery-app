import React, { useState } from 'react';

export default function AdminRegisterNewUser() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('seller');

  const handleType = (roleType) => {
    const userType = {
      vendedor: 'seller',
      cliente: 'customer',
    };

    setType(userType[roleType]);
  };

  const register = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const response = await axios.post(
      '/admin/register',
      {
        name: nome,
        email,
        password,
        role: type,
      },
      { headers: { authorization: token } },
    );
    console.log(response);
  };

  return (
    <div className="app-admin-manage__register">
      <label
        htmlFor="admin_manage__input-name"
        className="app-admin__field-label"
      >
        Nome
        <input
          id="admin_manage__input-name"
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
          onChange={ ({ target }) => handleType(target.value) }
        >
          <option>vendedor</option>
          <option>cliente</option>
        </select>
      </label>

      <button
        type="button"
        data-testid="admin_manage__button-register"
        onClick={ () => register() }
        className="app-admin__button-login"
      >
        CADASTRAR
      </button>
    </div>
  );
}
