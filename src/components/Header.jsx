import React from 'react'

const Header = ({cartCount, onCartClick}) => {
  return (
      <>
          <div className='header'>
              <h1> BATCRAFT</h1>
              <h4><i className="fa-solid fa-house"></i> Home</h4>
              <h4><i className="fa-solid fa-baseball-bat-ball"></i> Cricket Bats</h4>
              <h4><i className="fa-solid fa-fire"></i> New Arrivals</h4>
              <h4><i className="fa-solid fa-trophy"></i> Best Sellers</h4>

              <div className='header-btn'>
              <button onClick={onCartClick}><i className="fa-solid fa-cart-shopping"></i> Cart: {cartCount}</button>
                </div>
          </div>
      </>
  )
}

export default Header