import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

export default function NavBar() {
  const [profileName, setProfileName] = useState('');
  const [profileRole, setProfileRole] = useState('');
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  // Criando a diferenciação do componente para sellers, customers e admins
  const customerNavBar = (
    <>
      <button
        type="button"
        className="customer_products__element-navbar-link-products"
        data-testid="customer_products__element-navbar-link-products"
        onClick={ () => history.push('/customer/products') }
      >
        PRODUTOS
      </button>
      <button
        type="button"
        className="customer_products__element-navbar-link-orders"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => history.push('customer/orders') }
      >
        MEUS PEDIDOS
      </button>
    </>
  );

  const sellerNavBar = (
    <>
      <div>RESPONSAVEL POR SELLER, FAVOR ATAULIZAR O NAVBAR DA FORMA ADEQUADA</div>
      <div>...</div>
    </>
  );

  const adminNavBar = (
    <>
      <div>RESPONSAVEL POR ADMIN, FAVOR ATAULIZAR O NAVBAR DA FORMA ADEQUADA</div>
      <div>...</div>
    </>
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
      { (profileRole === 'admin') && adminNavBar }
      { (profileRole === 'customer') && customerNavBar }
      { (profileRole === 'seller') && sellerNavBar }
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
