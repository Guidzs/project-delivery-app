import React, { useEffect, useState } from 'react';
import CustomerProduct from '../components/CustomerProduct';
import NavBar from '../components/NavBar';
import ShoppingCart from '../components/ShoppingCart';
import axios from '../utils/connectionDatabase';

export default function CustomerProducts() {
  const [products, setProducts] = useState([]);

  useEffect(
    () => {
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
