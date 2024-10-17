import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, increment, decrement } = useContext(CartContext);

  return (
    <div className="p-4">
      <h2 className="text-xl">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center my-2">
            <div>
              <h3>{item.title}</h3>
              <p>${item.price} x {item.quantity}</p>
            </div>
            <div>
              <button onClick={() => increment(item.id)}>+</button>
              <button onClick={() => decrement(item.id)}>-</button>
              <button onClick={() => removeFromCart(item.id)} className="ml-2 text-red-500">
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
