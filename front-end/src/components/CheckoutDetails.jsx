import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import context from '../context/Context';
import axios from '../utils/connectionDatabase';

export default function CheckoutDetails() {
  const history = useHistory();
  const { cart, totalValueCart } = useContext(context);

  const [sellers, setSellers] = useState([]);

  const [seller, setSeller] = useState('');
  const [deliveryAddress, setAddress] = useState('');
  const [deliveryNumber, setAddressNumber] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (
      deliveryAddress.length <= 0
      || deliveryNumber.length <= 0
      || seller.length <= 0
      || cart.length === 0
    ) {
      setButtonDisabled(true);
    } else { setButtonDisabled(false); }
  }, [deliveryAddress, seller, deliveryNumber, cart]);

  const salesConnection = async () => {
    const { name: customer, token } = JSON.parse(localStorage.getItem('user'));
    const { data: { saleId } } = await axios.post(
      '/sales', // ROTA
      {
        products: cart,
        totalPrice: totalValueCart,
        deliveryNumber,
        deliveryAddress,
        customer,
        seller,
      }, // BODY
      { headers: { authorization: token } }, // HEADERS
    );
    console.log(saleId);
    return saleId;
  };

  const finishOrder = async () => {
    // finalizar compras!
    const id = await salesConnection();
    history.push(`/customer/orders/${id}`);
  };

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

  const buttonClass = (buttonDisabled)
    ? 'app-admin__button-login app-admin__button-login-disabled'
    : 'app-admin__button-login';

  return (
    <div className="app-admin-manage__register customer-checkout__form-order-complement">
      <label
        htmlFor="customer_checkout__select-seller"
        className="app-admin__field-label"
      >
        Vendedor
        <select
          data-testid="customer_checkout__select-seller"
          id="customer_checkout__select-seller"
          className="app-admin__field"
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
      </label>

      <label
        htmlFor="customer_checkout__select-seller"
        className="app-admin__field-label"
        //
      >
        Endereço
        <input
          type="text"
          placeholder="address"
          data-testid="customer_checkout__input-address"
          className="app-admin__field"
          value={ deliveryAddress }
          onChange={ ({ target }) => setAddress(target.value) }
        />
      </label>

      <label
        htmlFor="customer_checkout__select-seller"
        className="app-admin__field-label"
      >
        Número
        <input
          type="text"
          placeholder="number"
          data-testid="customer_checkout__input-address-number"
          className="app-admin__field"
          value={ deliveryNumber }
          onChange={ ({ target }) => setAddressNumber(target.value) }
        />
      </label>

      <button
        type="button"
        disabled={ buttonDisabled }
        className={ buttonClass }
        data-testid="customer_checkout__button-submit-order"
        onClick={ () => finishOrder() }
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}
