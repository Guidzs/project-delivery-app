import React, { useContext } from 'react';
import context from '../context/Context';
import CheckoutItemCart from './CheckoutItemCart';

export default function CheckoutCompletion() {
  const { cart, totalValueCart } = useContext(context);
  return (
    <div className="order-completion">
      <table className="order-completion-table">
        <thead className="order-completion-thead">
          <tr className="checkout-item-cart">
            <th className="table-index-field">Index</th>
            <th className="table-descricao-field">Descrição</th>
            <th className="table-quantity-field">Quantidade</th>
            <th className="table-unit-value-field">Valor Unitário</th>
            <th className="table-sub-total-field">Sub-Total</th>
            <th className="table-button-remove-item-field">Remover Item</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
      <div
        className="order-details-total"
        data-testid="customer_checkout__element-order-total-price"
      >
        { totalValueCart.toFixed(2).replace('.', ',') }
      </div>
    </div>
  );
}
