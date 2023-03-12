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
    <div key={ id } className="card-product">
      <div className="product-price">
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
      <div className="products-img-container">
        <img
          className="product-img"
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ urlImage }
          alt="imagem do produto"
        />
      </div>
      <div className="product-control">
        <p
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          { name }
        </p>
        <div className="product-controls">
          <button
            className="product-controls-minus"
            onClick={ () => changeQuantity(quantity - 1) }
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
          >
            -
          </button>

          <input
            type="text"
            className="product-controls-field"
            data-testid={ `customer_products__input-card-quantity-${id}` }
            value={ quantity }
            onChange={ ({ target }) => changeQuantity(target.value) }
          />
          <button
            onClick={ () => changeQuantity(quantity + 1) }
            className="product-controls-plus"
            type="button"
            data-testid={ `customer_products__button-card-add-item-${id}` }
          >
            +
          </button>

        </div>
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
