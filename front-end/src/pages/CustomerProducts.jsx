import React, { useEffect, useState, useContext } from 'react';
import CustomerProduct from '../components/CustomerProduct';
import NavBar from '../components/NavBar';
import ShoppingCart from '../components/ShoppingCart';
import context from '../context/Context';
import axios from '../utils/connectionDatabase';
import './CustomerProducts.css';

export default function CustomerProducts() {
  const { setCart } = useContext(context);
  const [products, setProducts] = useState([]);

  useEffect(
    () => {
      setCart([]);
      const fetchProducts = async () => {
        const productsResponse = await axios.get('/products');
        setProducts(productsResponse.data);
      };
      fetchProducts();
    },
    [null],
  );

  return (
    <>
      <NavBar />
      <div className="cards-products-container">
        {
          products.map(({ name, price, urlImage, id }) => (
            <CustomerProduct
              key={ `product-${id}` }
              name={ name }
              price={ price }
              urlImage={ urlImage }
              id={ id }
            />
          ))
        }
      </div>
      <ShoppingCart />
    </>
  );
}
