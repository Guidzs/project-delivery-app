import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import moment from 'moment/moment';
import Navbar from '../components/NavBar';
import axios from '../utils/connectionDatabase';

function SellerOrders() {
  const history = useHistory();
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
              <button
                key={ order.id }
                type="button"
                onClick={ () => history.push(`/seller/orders/${order.id}`) }
                className="order_card"
              >
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
              </button>
            ))
          ) }
      </div>
    </div>
  );
}

export default SellerOrders;
