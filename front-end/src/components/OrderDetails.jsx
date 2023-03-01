import React, { useState } from 'react';

export default function OrderDetails() {
  const [seller, setSeller] = useState('Fulana Pereira');
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');

  const finishOrder = () => {

  };

  return (
    <div className="order-details">
      <select
        data-testid="customer_checkout__select-seller"
        className="customer_checkout__select-seller"
        value={ seller }
        onChange={ ({ target }) => setSeller(target.value) }
      >
        <option>Fulana Pereira</option>
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
