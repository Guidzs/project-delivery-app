import React, { useState, useEffect } from 'react';
import axios from '../utils/connectionDatabase';

export default function OrderDetails() {
  const [sellers, setSellers] = useState([]);

  const [seller, setSeller] = useState('');
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');

  const finishOrder = () => {

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
        value={ address }
        onChange={ ({ target }) => setAddress(target.value) }
      />

      <input
        type="text"
        placeholder="number"
        data-testid="customer_checkout__input-address-number"
        className="customer_checkout__input-address-number"
        value={ addressNumber }
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
