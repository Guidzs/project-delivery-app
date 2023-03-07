import PropTypes from 'prop-types';
import React from 'react';

export default function CellCustomerOrderDetail({ id, data, status, totalPrice, index }) {
  return (
    <div>
      {
        `id: ${id},
        data: ${data},
        status: ${status},
        totalPrice: ${totalPrice}`
      }

      <div
        data-testid={ `customer_orders__element-order-id-${index + 1}` }
      >
        { id }
      </div>

      <div
        data-testid={ `customer_orders__element-delivery-status-${index + 1}` }
      >
        { status }
      </div>

      <div
        data-testid={ `customer_orders__element-order-date-${index + 1}` }
      >
        { data }
      </div>

      <div
        data-testid={ `customer_orders__element-card-price-${index + 1}` }
      >
        { totalPrice }
      </div>
    </div>
  );
}

CellCustomerOrderDetail.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};
