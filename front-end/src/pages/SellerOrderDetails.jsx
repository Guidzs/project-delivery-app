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
const ROUTE = 'seller_order_details';
const ELEMENT = 'element-order-details-label';
export default function SellerOrderDetails() {
  const [sales, setSales] = useState([]);
  const { saleId } = useParams();
  const [value, setValue] = useState(false);
  const [emTransito, setemTransito] = useState(false);

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const getSales = async () => {
      try {
        const { data: { message: salesDB } } = await axios.get(`/sales/${saleId}`, {
          headers: {
            Authorization: token,
          },
        });
        setSales(salesDB);
      } catch (err) {
        console.log(err);
      }
    };
    getSales();
  }, [null]);

  useEffect(() => {
    const changeState = async () => {
      if (value) {
        await axios.put(`/sales/${saleId}`);
      }
    };
    changeState();
  }, [value]);

  useEffect(() => {
    const changeState = async () => {
      if (emTransito) {
        await axios.put(`/sales/${saleId}`);
      }
    };
    changeState();
  }, [emTransito]);

  if (sales.length === 0) {
    return <h1>Loading...</h1>;
  }
  const { id, status, productsList: products, saleDate, totalPrice } = sales.sale;
  return (
    <>
      <NavBar />
      {/* ORDER INFO  */}
      <div>
        <h2 data-testid="seller_order_details__element-order-details-label-order-id">
          Pedido
          {' '}
          {id}
        </h2>
        <p data-testid="seller_order_details__element-order-details-label-order-date">
          {formatDate(saleDate)}
        </p>
        <p
          data-testid={ `${ROUTE}__${ELEMENT}-delivery-status` }
        >
          {status}
        </p>
        <button
          type="button"
          disabled={ sales.sale.status === 'Preparando'
          || sales.sale.status === 'Em Trânsito' }
          data-testid="seller_order_details__button-preparing-check"
          onClick={ () => setValue(!value) }
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          disabled={ sales.sale.status === 'Em Trânsito'
          || sales.sale.status === 'Pendente' }
          data-testid="seller_order_details__button-dispatch-check"
          onClick={ () => setemTransito(!emTransito) }
        >
          SAIU PARA ENTREGA
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
              console.log(element.SalesProducts);
              const { name, price } = element;
              const { productId, quantity } = element.SalesProducts;
              return (
                <tr key={ productId }>
                  <td
                    data-testid={
                      `seller_order_details__element-order-table-item-number-${index}`
                    }
                  >
                    {index + 1}
                  </td>
                  <td
                    data-testid={
                      `seller_order_details__element-order-table-name-${index}`
                    }
                  >
                    {name}
                  </td>
                  <td
                    data-testid={
                      `seller_order__element-order-table-quantity-${index}`
                    }
                  >
                    {quantity}
                  </td>
                  <td
                    data-testid={
                      `seller_order_details__element-order-table-unit-price-${index}`
                    }
                  >
                    {formatAsCurrency(price.replace(',', '.'))}
                  </td>
                  <td
                    data-testid={
                      `seller_order_details__element-order-table-sub-total-${index}`
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
        <h2 data-testid="seller_order_details__element-order-total-price">
          {formatAsCurrency(totalPrice)}
        </h2>
      </div>
    </>
  );
}
