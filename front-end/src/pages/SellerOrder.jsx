import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';

import Navbar from '../components/NavBar';
import axios from '../utils/connectionDatabase';

function SellerOrders() {
  const [orders, setOrders] = useState();
  const orderNumberLength = 4;

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get('/sales');
      setOrders(response.data);
    };
    getOrders();
  }, [null]);
  return (
    <div>
      <Navbar />
      <div>
        { orders === undefined
          ? <p> Loging... </p>
          : (
            orders.products.map((order) => (
              <div key={ order.id } className="order_card">
                <Link to={ `/seller/orders/${order.id}` }>
                  <p
                    data-testid={ `seller_orders__element-order-id-${order.id}` }

                  >
                    {' '}
                    Pedido Nº
                    {' '}
                    {String(order.id).padStart(orderNumberLength, '0')}
                  </p>

                  <p
                    data-testid={ `seller_orders__element-delivery-status-${order.id}` }
                  >
                    <b>Status:</b>
                    {' '}
                    {order.status}
                  </p>

                  <p
                    data-testid={ `seller_orders__element-order-date-${order.id}` }
                  >
                    <b>Data:</b>
                    {' '}
                    { moment(`${order.saleDate}`).format('DD/MM/YYYY') }
                  </p>

                  <p
                    data-testid={ `seller_orders__element-card-price-${order.id}` }
                  >
                    <b>Valor Total:</b>
                    {' '}
                    {`R$ ${order.totalPrice.toString().replace('.', ',')}` }
                  </p>

                  <p
                    data-testid={ `seller_orders__element-card-address-${order.id}` }
                  >
                    <b>Endereço de Entrega:</b>
                    {' '}
                    { `${order.deliveryAddress}, ${order.deliveryNumber}` }
                  </p>

                </Link>
              </div>
            ))
          ) }
      </div>
    </div>
  );
}

export default SellerOrders;
