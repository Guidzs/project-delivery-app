import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import context from '../context/Context';

export default function ShoppingCart() {
  const history = useHistory();
  const { totalValueCart } = useContext(context);
  const disabledButton = totalValueCart === 0;

  return (
    <button
      type="button"
      disabled={ disabledButton }
      data-testid="customer_products__button-cart"
      onClick={ () => history.push('/checkout/products') }
    >
      VER CARRINHO R$&nbsp;
      <span data-testid="customer_products__checkout-bottom-value">
        { totalValueCart.toFixed(2).replace('.', ',') }
      </span>
    </button>
  );
}
