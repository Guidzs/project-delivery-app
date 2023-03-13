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
      <div className="customer-orders-component ">
        { orders === undefined
          ? <p> Loging... </p>
          : (
            orders.products.map((order) => (
              <button
                className="customerOrders sellerOrders"
                key={ order.id }
                type="button"
                onClick={ () => history.push(`/seller/orders/${order.id}`) }
              >
                <p
                  className="idOrder"
                  data-testid={ `seller_orders__element-order-id-${order.id}` }
                >

                  {String(order.id).padStart(orderNumberLength, '0')}
                </p>
                <div className="adressOrder">
                  <div className="status-dataOrder">
                    <p
                      className={ `statusOrder statusOrder-${order.status}` }
                      data-testid={ `seller_orders__element-delivery-status-${order.id}` }
                    >
                      {order.status}
                    </p>
                    <div className="dataEPrice">
                      <p
                        className="dataOrder"
                        data-testid={ `seller_orders__element-order-date-${order.id}` }
                      >
                        { moment(`${order.saleDate}`).format('DD/MM/YYYY') }
                      </p>

                      <p
                        className="priceOrder"
                        data-testid={ `seller_orders__element-card-price-${order.id}` }
                      >
                        {`R$ ${order.totalPrice.toString().replace('.', ',')}` }
                      </p>
                    </div>
                  </div>
                  <p
                    className="streetOrder"
                    data-testid={ `seller_orders__element-card-address-${order.id}` }
                  >
                    { `${order.deliveryAddress}, ${order.deliveryNumber}` }
                  </p>
                </div>
              </button>
            ))
          ) }
      </div>
    </div>
  );
}

export default SellerOrders;
