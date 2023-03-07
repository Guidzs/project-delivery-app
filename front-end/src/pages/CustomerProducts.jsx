import React, { useEffect, useState } from 'react';
import CustomerProduct from '../components/CustomerProduct';
import NavBar from '../components/NavBar';
import ShoppingCart from '../components/ShoppingCart';
import context from '../context/Context';
import axios from '../utils/connectionDatabase';

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
      <div className="card-product">
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
