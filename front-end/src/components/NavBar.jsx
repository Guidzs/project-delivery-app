import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

export default function NavBar() {
  const [profileName, setProfileName] = useState('');
  const history = useHistory();

  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('user'));
    setProfileName(name);
  }, [null]);

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div className="navbar">
      <div
        className="customer_products__element-navbar-link-products"
        data-testid="customer_products__element-navbar-link-products"
      >
        PRODUTOS
      </div>
      <div
        className="customer_products__element-navbar-link-orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        MEUS PEDIDOS
      </div>
      <div
        className="customer_products__element-navbar-user-full-name"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { profileName }
      </div>

      <div>
        <button
          type="button"
          className="customer_products__element-navbar-link-logout"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => logout() }
        >
          SAIR
        </button>
      </div>
    </div>
  );
}
