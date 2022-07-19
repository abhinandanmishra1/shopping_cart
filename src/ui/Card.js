import React, { useState, useEffect } from 'react';

export default function Card({ data, cart, updateCart }) {
  const [itemInCart, setItemInCart] = useState(false);
  const CartUpdate = () => {
    if (cart.find(item => item.id === data.id)) {
      updateCart(cart.filter(item => item.id !== data.id));
    } else {
      updateCart([...cart, data]);
    }
    setItemInCart(!itemInCart);
  };

  useEffect(() => {
    setItemInCart(cart.find(item => item.id === data.id));
  }, [ cart, data.id ]);
  
  return (
    <div className="product">
      <div className="product__left">
        <div className="product__main">
          <div className="product__header">
            <h1>{data.title}</h1>
          </div>
          <div className="product__focus">
            <span>Description</span>
            <span>Details</span>
          </div>
        </div>
        <div className="product__details">
          <div className="product__description">
            {data.description}
          </div>
          <div className="product__rating">
            <span>
              &#11088;
              {data.rating.rate}
            </span>

            <span>
              {data.rating.count}
              &#128100;
            </span>

          </div>
          <div className="product__total">
            <h3>Total Price : </h3>
            <p>
              $
              {data.price}
            </p>
          </div>
          <div
            className="product__add"
            onClick={CartUpdate}
            role="button"
          >
            {
              itemInCart && 'Added into Cart'
            }
            {
              !itemInCart && 'Add to Cart'
            }
          </div>
        </div>
      </div>
      <div className="product__right">
        <img src={data.image} alt={data.title} />
      </div>
    </div>
  );
}
