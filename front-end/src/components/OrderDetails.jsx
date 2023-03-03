import React, { useState, useEffect/* , useContext */ } from 'react';
// import { useHistory } from 'react-router';
// import context from '../context/Context';
import axios from '../utils/connectionDatabase';

export default function OrderDetails() {
  // const history = useHistory();
  // const { cart } = useContext(context);

  const [sellers, setSellers] = useState([]);

  const [seller, setSeller] = useState('');
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');

  const salesConnection = async () => {
    /* const result = axios.post(
      '', // rota
      {}, // body
      // headers
    )
    console.log(result);
    return result */
  };

  const finishOrder = () => {
    // finalizar compras!
    salesConnection();
    // history.push(`/customer/orders/${}`);
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
