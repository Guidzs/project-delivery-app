import React from 'react';

const products = [
  { id: 1,
    name: 'xablau',
    price: '100,00',
    image: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
    quantity: '1',
  },
];

// const customer = {
//   name: 'Nome Da Pessoa Usuária',
//   email: 'email@dominio.com',
//   role: 'customer',
//   token: 'token',
// };

export default function CustomerProducts() {
  return (
    <div className="card-product">
      {products.map((product) => (
        <div key={ product.id }>
          <div className="price">
            <span>
              R$
              { ' ' }
            </span>
            <span
              data-testid={ `customer_products__element-card-price-${product.id}` }
            >
              { product.price.replace(/\./, ',') }
            </span>
          </div>
          <img
            className="product-img"
            data-testid={ `customer_products__img-card-bg-image-${product.id}` }
            src={ product.image }
            alt="imagem do produto"
            style={ { width: '200px' } }
          />

          <p
            data-testid={ `customer_products__element-card-title-${product.id}` }
          >
            { product.name }
          </p>
          <div className="controls">
            <button
              // onClick={ removeItem }
              type="button"
              data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            >
              -
            </button>

            <input
              type="text"
              data-testid={ `customer_products__input-card-quantity-${product.id}` }
              value={ product.quantity }
              // onChange={ changeManualQuantity }
            />
            <button
              // onClick={ addItem }
              type="button"
              data-testid={ `customer_products__button-card-add-item-${product.id}` }
            >
              +
            </button>

          </div>

        </div>
      ))}

    </div>
  );
}
