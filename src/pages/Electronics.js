import React, { useState } from 'react';
import Card from '../ui/Card';
import Navbar from '../ui/Navbar';

export default function Electronics({ data, cart, updateCart }) {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Navbar
        cart={cart}
        category="Electronics"
        showCart={showCart}
        setShowCart={setShowCart}
      />
      {
        !showCart && (
          <div className="wrapper">
            {
              data.map((item) => (
                <Card
                  cart={cart}
                  updateCart={updateCart}
                  data={item}
                />
              ))
            }
          </div>
        )
      }
      {
        showCart && (
          <div className="wrapper">
            {
              cart.map((item) => (
                <Card
                  cart={cart}
                  updateCart={updateCart}
                  data={item}
                />
              ))
            }
          </div>
        )
      }
    </>
  );
}
