import React, { useContext } from 'react';
import context from '../context/Context';
import CheckoutItemCart from './CheckoutItemCart';

export default function CheckoutCompletion() {
  const { cart, totalValueCart } = useContext(context);
  return (
    <div className="order-completion">
      <div className="order-completion-table">
        <tr className="checkout-item-cart">
          <th className="table-field table-index-head">Index</th>
          <th className="table-field table-descricao-head">Descrição</th>
          <th className="table-field table-quantity-head">Quantidade</th>
          <th className="table-field table-unit-value-head">Valor Unitário</th>
          <th className="table-field table-sub-total-head">Sub-Total</th>
          <th className="table-field table-button-remove-item-head">Remover Item</th>
        </tr>
        {
          cart.map(({ name, price, quantity }, index) => (
            <CheckoutItemCart
              key={ `${index}-${name}` }
              name={ name }
              price={ price }
              quantity={ quantity }
              index={ index + 1 }
            />
          ))
        }
      </div>
      <div
        className="shopping-cart-button"
        data-testid="customer_checkout__element-order-total-price"
      >
        { `R$ ${totalValueCart.toFixed(2).replace('.', ',')}` }
      </div>
    </div>
  );
}
