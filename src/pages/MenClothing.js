import React, { useState } from 'react';
import Card from '../ui/Card';
import Navbar from '../ui/Navbar';

export default function MenClothing({ data, cart, updateCart }) {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Navbar
        cart={cart}
        category="Men's Clothing"
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
