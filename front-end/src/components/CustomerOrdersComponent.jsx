import React, { useState, useEffect } from 'react';
import axios from '../utils/connectionDatabase';
import CellCustomerOrderDetail from './CellCustomerOrderDetail';

export default function CustomerOrdersComponent() {
  const [sales, setSales] = useState([]);

  const configureId = (id) => {
    const ten = 10;
    const hundred = 100;
    const thousand = 1000;
    if (id < ten) return `000${id}`;
    if (id < hundred) return `00${id}`;
    if (id < thousand) return `0${id}`;
    return id;
  };

  useEffect(() => {
    async function getAllSales() {
      const { token } = JSON.parse(localStorage.getItem('user'));
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
      { sales.map((sale, index) => {
        const newId = configureId(sale.id);
        return (
          <CellCustomerOrderDetail
            key={ `${index}-sale` }
            UUID={ id }
            id={ newId }
            data={ sale.saleDate.split('T')[0].split('-').reverse().join('/') }
            status={ sale.status }
            totalPrice={ `R$ ${sale.totalPrice.replace('.', ',')}` }
            index={ index }
          />
        );
      }) }
    </div>
  );
}
