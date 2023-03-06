import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router';
import validateJwt from '../utils/validateJwt';
import Context from './Context';

export default function Provider({ children }) {
  const history = useHistory();
  const [cart, setCart] = useState([]);
  const [totalValueCart, setTotalValueCart] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    setTotalValueCart(total);

    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleCart = ({ name, price, quantity }) => {
    // conferir se o produto existe no carrinho
    const productExist = cart.findIndex((prod) => prod.name === name);
    const menosUm = -1; // LINT

    if (quantity > 0 && productExist === menosUm) {
      console.log('adicionar o produto');
      setCart((prevState) => [...prevState, { name, price, quantity }]);
    } else if (quantity > 0 && productExist !== menosUm) {
      console.log('atualizar o produto');
      const copiaDoCarrinho = [...cart];
      copiaDoCarrinho[productExist].quantity = quantity;
      setCart(copiaDoCarrinho);
    } else if (quantity <= 0 && productExist !== menosUm) {
      console.log('apagar produto do carrinho');
      const copiaDoCarrinho = [...cart];
      copiaDoCarrinho.splice(productExist, 1);
      setCart(copiaDoCarrinho);
    } else if (quantity <= 0 && productExist === menosUm) {
      console.log('nao fazer nada');
    }
  };

  const removeItemFromCart = (index) => {
    const copiaDoCarrinho = [...cart];
    copiaDoCarrinho.splice(index, 1);
    setCart(copiaDoCarrinho);
  };

  const redirectUserByLogin = () => {
    const { role } = JSON.parse(localStorage.getItem('user'));
    switch (role) {
    case 'customer':
      history.push('/customer/products');
      break;
    case 'seller':
      history.push('/');
      break;
    case 'admin':
      history.push('/');
      break;
    default:
      history.push('page404');
    }
  };

  const confirmCustomerInRoute = () => {
    const { role, token } = JSON.parse(localStorage.getItem('user'));
    const validateToken = validateJwt(token);
    console.log(role, validateToken);

    if (role !== 'customer' || !!validateToken) {
      history.push('/');
    }
  };

  const confirmSellerInRoute = () => {
    const { role, token } = JSON.parse(localStorage.getItem('user'));
    const validateToken = validateJwt(token);
    console.log(role, validateToken);

    if (role !== 'seller' || !!validateToken) {
      history.push('/');
    }
  };

  const confirmAdminInRoute = () => {
    const { role, token } = JSON.parse(localStorage.getItem('user'));
    const validateToken = validateJwt(token);
    console.log(role, validateToken);

    if (role !== 'admin' || !!validateToken) {
      history.push('/');
    }
  };

  const myContext = useMemo(() => ({
    cart,
    handleCart,
    totalValueCart,
    removeItemFromCart,
    redirectUserByLogin,
    confirmCustomerInRoute,
    confirmSellerInRoute,
    confirmAdminInRoute,
  }), [cart, totalValueCart]);

  return (
    <Context.Provider value={ myContext }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
