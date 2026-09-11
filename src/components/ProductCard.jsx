import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="productCard">

      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-name">
        <h3>{product.name}</h3>
      </div>

      <div className="product-price">
        <p>
          Rs.{Number(product.price).toLocaleString("en-IN")}
        </p>
      </div>

      <div className='product-btn'>
      <button onClick={() => onAddToCart(product)}>
        Add To Cart
        </button>
        </div>

    </div>
  );
};

export default ProductCard;