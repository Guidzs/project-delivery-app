import PropTypes from 'prop-types';
import React from 'react';

export default function CellCustomerOrderDetail({ id, data, status, totalPrice }) {
  return (
    <div>
      {
        `id: ${id},
        data: ${data},
        status: ${status},
        totalPrice: ${totalPrice}`
      }
    </div>
  );
}

CellCustomerOrderDetail.propTypes = {
  id: PropTypes.number.isRequired,
  data: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};
