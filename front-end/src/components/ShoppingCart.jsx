import React from 'react';
import { useHistory } from 'react-router';

export default function ShoppingCart() {
  const history = useHistory();
  /* const disabledButton = totalValue === 0 */

  return (
    <button
      type="button"
      disabled
      // disabled={ disabledButton }
      data-testid="customer_products__button-cart"
      onClick={ () => history.push('/checkout/products') }
    >
      VER CARRINHO
      <span data-testid="customer_products__checkout-bottom-value">
        0,00
        {/* totalValue.replace('.', ',') */}
      </span>
    </button>
  );
}
