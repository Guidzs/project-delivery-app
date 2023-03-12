import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import context from '../context/Context';
import './ShoppingCart.css';

export default function ShoppingCart() {
  const history = useHistory();
  const { totalValueCart } = useContext(context);
  const disabledButton = totalValueCart === 0;

  const buttonClass = (totalValueCart <= 0)
    ? 'shopping-cart-button shopping-cart-button-disabled'
    : 'shopping-cart-button';

  return (
    <button
      type="button"
      disabled={ disabledButton }
      className={ buttonClass }
      data-testid="customer_products__button-cart"
      onClick={ () => history.push('/customer/checkout') }
    >
      VER CARRINHO R$&nbsp;
      <span data-testid="customer_products__checkout-bottom-value">
        { totalValueCart.toFixed(2).replace('.', ',') }
      </span>
    </button>
  );
}
