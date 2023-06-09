import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import context from '../context/Context';
import './CheckoutItemCart.css';

export default function CheckoutItemCart({ name, price, quantity, index }) {
  const { removeItemFromCart } = useContext(context);

  return (
    <tr className="checkout-item-cart">
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index - 1}` }
        className="table-field table-item-number table-index-field"
      >
        { index }
      </td>

      <td
        data-testid={ `customer_checkout__element-order-table-name-${index - 1}` }
        className="table-field table-name table-descricao-field"
      >
        { name }
      </td>

      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index - 1}` }
        className="table-field table-quantity table-quantity-field"
      >
        { quantity }
      </td>

      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index - 1}` }
        className="table-field table-unit-price table-unit-value-field"
      >
        { price.replace('.', ',') }
      </td>

      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index - 1}` }
        className="table-field table-total-price table-sub-total-field"
      >
        { (Number(price) * quantity).toFixed(2).replace('.', ',') }
      </td>

      <td className="table-button-remove-item-field">
        <button
          type="button"
          data-testid={ `customer_checkout__element-order-table-remove-${index - 1}` }
          className="table-field table-remove-item"
          onClick={ () => removeItemFromCart(index - 1) }
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

CheckoutItemCart.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
