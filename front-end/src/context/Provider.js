import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [cart, setCart] = useState([]);

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

  const myContext = useMemo(() => ({
    cart,
    handleCart,
  }), [cart]);

  return (
    <Context.Provider value={ myContext }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
