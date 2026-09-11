import React from 'react'

const Card = ({ cartItems, onIncrease, onDecrease, onRemove, onClose }) => {
    
    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity, 0
    )

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity, 0
    )
    return (
        <>
            {cartItems.map((item) => (
                <div className="cart" key={item.id}>
      
                    <div className="cart-image">
                        <img src={item.image} alt={item.name} />
                    </div>
      
                    <div className="cart-products">
                        <h2>{item.name}</h2>
                        <h3>Price: ₹{item.price}</h3>
                        <h4>Total Amount: ₹{item.price * item.quantity}</h4>
                    </div>
                </div>
            ))}
  
                       <div className='last'>
                         <h1>Thankyou for Shopping <i class="fa-solid fa-bag-shopping"></i></h1>
                     </div>
      
        </>
    );
}

export default Card;