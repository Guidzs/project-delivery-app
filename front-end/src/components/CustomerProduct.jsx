import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function CustomerProduct({ id, name, price, urlImage }) {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    console.log(quantity);
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
          onClick={ () => setQuantity(quantity - 1) }
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>

        <input
          type="text"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ quantity }
          onChange={ ({ target }) => setQuantity(target.value) }
        />
        <button
          onClick={ () => setQuantity(quantity + 1) }
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
