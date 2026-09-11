import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import productData from './data/ProductData.json';
import Card from './components/Card';
import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCartItems((items) => {
      const existingProduct = items.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return items.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...items,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };


  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };


  const removeFromCart = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

 
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Header
        cartCount={cartCount}
        onCartClick={() => setShowCart(true)}
      />

      <Banner />

      <ProductList
        products={productData}
        onAddToCart={addToCart}
      />

      {showCart && (
        <Card
          cartItems={cartItems}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeFromCart}
          onClose={() => setShowCart(false)}
        />
      )}
    </>
  );
};

export default App;