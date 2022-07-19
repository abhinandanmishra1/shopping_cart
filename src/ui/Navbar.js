import React from 'react';
import Button from './Button';

export default function Navbar({
  category, cart, showCart, setShowCart,
}) {
  const btnClick = () => {
    setShowCart(!showCart);
  };
  return (
    <div className="navbar">
      {
        !cart && (
          <li className="navbar__title">Scaler Ecommerce</li>
        )
      }
      {cart && !showCart && (
        <Button
          onClick={btnClick}
          setShowCart={setShowCart}
          showCart={showCart}
          title={`${category} Cart`}
        />
      )}
      {cart && showCart && (
        <Button
          onClick={btnClick}
          setShowCart={setShowCart}
          showCart={showCart}
          title="Back"
        />
      )}
    </div>
  );
}
