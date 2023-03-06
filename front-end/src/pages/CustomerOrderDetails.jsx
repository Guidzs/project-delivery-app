import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../utils/connectionDatabase';

import NavBar from '../components/NavBar';

const formatAsCurrency = (number) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(number);

const formatDate = (date) => {
  const newDate = new Date(date);
  const day = newDate.getDate().toString().length === 1
    ? `0${newDate.getDate()}`
    : newDate.getDate();
  const month = (newDate.getMonth() + 1).toString().length === 1
    ? `0${newDate.getMonth() + 1}`
    : newDate.getMonth() + 1;
  return `${day}/${month}/${newDate.getFullYear()}`;
};

const ROUTE = 'customer_order_details';
const ELEMENT = 'element-order-details-label';

export default function OrderDetails() {
  const [sales, setSales] = useState([]);
  const { saleId } = useParams();

  // body da requisição: {
  //   seller,
  // }

  // body da requisição: {
  //   seller,
  //   produtos,
  //   customer,
  //   address,
  //   addressNumber,
  // };

  // retorno: {
  //   id,
  //   sellerId,
  //   userId,
  //   totalPrice,
  //   deliveryAddress,
  //   deliveryNumber,
  //   saleDate,
  //   status,
  //   products: EAGER_LOADING,
  // };

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const getSales = async () => {
      try {
        const { data: { message: salesDB } } = await axios.get(`/sales/${saleId}`, {
          headers: {
            Authorization: token,
            'Content-Type': 'Application/json',
          },
        });
        console.log('response: ', salesDB);
        setSales(salesDB);
      } catch (err) {
        console.log(err);
      }
    };
    getSales();
  }, [null]);

  if (sales.length === 0) {
    return <h1>Loading...</h1>;
  }

  const { id, status, product: products, saleDate, totalPrice } = sales.sale;
  const { name: seller } = sales.seller;

  return (
    <>
      { console.log(sales) }
      { console.log('sales') }
      <NavBar />
      {/* ORDER INFO  */}
      <div>
        <h2 data-testid="customer_order_details__element-order-details-label-order-id">
          Pedido
          {' '}
          {id}
        </h2>
        <p data-testid="customer_order_details__element-order-details-label-seller-name">
          P. Vend:
          {' '}
          {seller}
        </p>
        <p data-testid="customer_order_details__element-order-details-label-order-date">
          {formatDate(saleDate)}
        </p>
        <p
          data-testid={ `${ROUTE}__${ELEMENT}-delivery-status` }
        >
          {status}
        </p>
        <button
          type="button"
          disabled={ sales.sale.status === 'Pendente' }
          data-testid="customer_order_details__button-delivery-check"
        >
          MARCAR COMO ENTREGUE
        </button>
      </div>

      {/* PRODUCT LIST */}
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        <tbody>
          { /* PRODUCT ITEMS */ }
          {
            products.map((element, index) => {
              console.log(element.sales_products);
              const { name, price } = element;
              const { product_id: productId, quantity } = element.sales_products;
              return (
                <tr key={ productId }>
                  <td
                    data-testid={
                      `customer_order_details__element-order-table-item-number-${index}`
                    }
                  >
                    {index + 1}
                  </td>
                  <td
                    data-testid={
                      `customer_order_details__element-order-table-name-${index}`
                    }
                  >
                    {name}
                  </td>
                  <td
                    data-testid={
                      `customer_order__element-order-table-quantity-${index}`
                    }
                  >
                    {quantity}
                  </td>
                  <td
                    data-testid={
                      `customer_order_details__element-order-table-unit-price-${index}`
                    }
                  >
                    {formatAsCurrency(price.replace(',', '.'))}
                  </td>
                  <td
                    data-testid={
                      `customer_order_details__element-order-table-sub-total-${index}`
                    }
                  >
                    {formatAsCurrency(
                      quantity * price.replace(',', '.'),
                    )}
                  </td>
                </tr>
              );
            })
          }

        </tbody>
      </table>

      {/* TOTAL PRICE */}
      <div>
        <h2>Total: </h2>
        {' '}
        <h2 data-testid="customer_order_details__element-order-total-price">
          {formatAsCurrency(totalPrice)}
        </h2>
      </div>
    </>
  );
}
