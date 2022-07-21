import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

export default function Navbar({
  category, cart, showCart, setShowCart,
}) {
  const btnClick = () => {
    setShowCart(!showCart);
  };
  return (
    <div className="navbar">

      <Link to="/" className="navbar__title">Scaler Ecommerce</Link>
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
