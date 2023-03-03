import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import context from '../context/Context';
import axios from '../utils/connectionDatabase';

export default function OrderDetails() {
  const history = useHistory();
  const { cart, totalValueCart } = useContext(context);

  const [sellers, setSellers] = useState([]);

  const [seller, setSeller] = useState('');
  const [deliveryAddress, setAddress] = useState('');
  const [deliveryNumber, setAddressNumber] = useState('');

  const salesConnection = async () => {
    const { name: customer } = JSON.parse(localStorage.getItem('user'));
    const body = {
      products: cart,
      totalPrice: totalValueCart,
      deliveryNumber,
      deliveryAddress,
      customer,
      seller,
    };
    const { data: { saleId } } = await axios.post(
      '/sales', // ROTA
      body, // BODY
      // HEADERS
    );
    console.log(saleId);
    return saleId;
  };

  const finishOrder = async () => {
    // finalizar compras!
    const id = await salesConnection();
    history.push(`/customer/orders/${id}`);
  };

  console.log(sellers);

  // Buscar vendedores no BD
  useEffect(() => {
    const getSellers = async () => {
      const { data: { sellers: response } } = await axios.get('/users/seller');
      setSellers(response);
    };
    getSellers();
  }, [null]);
  // Colocar o valor do primeiro option no state
  useEffect(() => {
    if (sellers.length > 0) setSeller(sellers[0]);
  }, [sellers]);

  return (
    <div className="order-details">
      <select
        data-testid="customer_checkout__select-seller"
        className="customer_checkout__select-seller"
        value={ seller }
        onChange={ ({ target }) => {
          setSeller(target.value);
          console.log('novo option');
        } }
      >
        { sellers.map((name, index) => (
          <option key={ `${name}-${index}` }>
            { name }
          </option>
        )) }
      </select>

      <input
        type="text"
        placeholder="address"
        data-testid="customer_checkout__input-address"
        className="customer_checkout__input-address"
        value={ deliveryAddress }
        onChange={ ({ target }) => setAddress(target.value) }
      />

      <input
        type="text"
        placeholder="number"
        data-testid="customer_checkout__input-address-number"
        className="customer_checkout__input-address-number"
        value={ deliveryNumber }
        onChange={ ({ target }) => setAddressNumber(target.value) }
      />

      <button
        type="button"
        className="customer_checkout__button-submit-order"
        data-testid="customer_checkout__button-submit-order"
        onClick={ () => finishOrder() }
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}
