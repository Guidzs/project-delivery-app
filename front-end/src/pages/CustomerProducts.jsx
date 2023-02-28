import React, { useEffect, useState } from 'react';
import CustomerProduct from '../components/CustomerProduct';
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
  );
}
