import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router';
import context from '../context/Context';
import './NavBar.css';

export default function NavBar() {
  const { setCart } = useContext(context);

  const [profileName, setProfileName] = useState('');
  const [profileRole, setProfileRole] = useState('');
  const history = useHistory();

  const logout = () => {
    localStorage.clear(setCart);
    setCart([]);
    history.push('/');
  };

  // Criando a diferenciação do componente para sellers, customerss e admins
  const customerNavBar = (
    <>
      <button
        type="button"
        className="navbar-button"
        data-testid="customer_products__element-navbar-link-products"
        onClick={ () => history.push('/customer/products') }
      >
        PRODUTOS
      </button>
      <button
        type="button"
        className="navbar-button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => history.push('/customer/orders') }
      >
        MEUS PEDIDOS
      </button>
    </>
  );

  const sellerNavBar = (
    <button
      type="button"
      className="navbar-button"
      data-testid="customer_products__element-navbar-link-orders"
      onClick={ () => history.push('/seller/orders') }
    >
      PEDIDOS
    </button>
  );

  const adminNavBar = (
    <button
      type="button"
      className="navbar-button"
      data-testid="customer_products__element-navbar-link-orders"
      onClick={ () => history.push('/admin/manage') }
    >
      GERENCIAR USUÁRIOS
    </button>
  );

  useEffect(() => {
    try {
      const { name, role } = JSON.parse(localStorage.getItem('user'));
      setProfileName(name);
      setProfileRole(role);
    } catch (error) {
      logout();
    }
  }, [null]);

  return (
    <div className="navbar">
      <div className="navbar__user-navigate">
        { (profileRole === 'administrator') && adminNavBar }
        { (profileRole === 'customer') && customerNavBar }
        { (profileRole === 'seller') && sellerNavBar }
      </div>
      <div className="navbar__user-info">
        <div
          className="navbar-name"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { profileName }
        </div>
        <div>
          <button
            type="button"
            className="navbar-button"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ () => logout() }
          >
            SAIR
          </button>
        </div>
      </div>
    </div>
  );
}
