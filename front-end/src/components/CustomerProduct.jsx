import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import context from '../context/Context';

export default function CustomerProduct({ id, name, price, urlImage }) {
  const { handleCart } = useContext(context);
  const [quantity, setQuantity] = useState(0);

  const changeQuantity = (QUANTITY) => {
    if (QUANTITY <= 0) {
      setQuantity(0);
    } else {
      setQuantity(QUANTITY);
    }
  };

  useEffect(() => {
    handleCart({ name, price, quantity });
  }, [quantity]);

  return (
    <div key={ id }>
      <div className="price">
        <span>
          R$
          { ' ' }
        </span>
        <span
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          { price.replace(/\./, ',') }
        </span>
      </div>
      <img
        className="product-img"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt="imagem do produto"
        style={ { width: '200px' } }
      />

      <p
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </p>
      <div className="controls">
        <button
          onClick={ () => changeQuantity(quantity - 1) }
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>

        <input
          type="text"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ quantity }
          onChange={ ({ target }) => changeQuantity(target.value) }
        />
        <button
          onClick={ () => changeQuantity(quantity + 1) }
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          +
        </button>

      </div>

    </div>
  );
}

CustomerProduct.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
};
