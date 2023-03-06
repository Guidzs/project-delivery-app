import React, { useState, useEffect } from 'react';
import axios from '../utils/connectionDatabase';
import CellCustomerOrderDetail from './CellCustomerOrderDetail';

export default function CustomerOrdersComponent() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    async function getAllSales() {
      const { data: { allSales } } = await axios.get('/sales', {
        headers: {
          Authorization: token,
          'Content-Type': 'Application/json',
        },
      });
      setSales(allSales);
    }
    getAllSales();
  }, [null]);

  return (
    <div
      className="customer-orders-component"
    >
      { sales.map((sale, index) => (
        <CellCustomerOrderDetail
          key={ `${index}-sale` }
          id={ sale.id }
          data={ sale.saleDate }
          status={ sale.status }
          totalPrice={ sale.totalPrice }
        />
      )) }
    </div>
  );
}
