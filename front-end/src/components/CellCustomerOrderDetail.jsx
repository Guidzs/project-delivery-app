import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';

export default function CellCustomerOrderDetail(
  { UUID, id, data, status, totalPrice, index },
) {
  const history = useHistory();
  return (
    <button
      type="button"
      onClick={ () => history.push(`/customer/orders/${UUID}`) }
    >
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
    </button>
  );
}

CellCustomerOrderDetail.propTypes = {
  id: PropTypes.number.isRequired,
  UUID: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};
