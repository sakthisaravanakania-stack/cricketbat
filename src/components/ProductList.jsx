import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products = [], onAddToCart }) => {
  return (
    <div className="product">
      <h1>Choose Your Perfect Bat <i className="fa-solid fa-baseball-bat-ball"></i></h1>

      <p>
        YOUR GAME YOUR BAT YOUR MOMENT <br />
        UNLEASH THE POWER <i className="fa-solid fa-star"></i>
      </p>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;