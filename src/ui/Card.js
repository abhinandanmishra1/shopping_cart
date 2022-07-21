import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
  }, [cart, data.id]);

  return (
    <div className="card">
      <div className="card__left">
        <div className="card__main">
          <div className="card__header">
            <h1>{data.title}</h1>
          </div>
          <div className="card__focus">
            <span>Description</span>
            <Link
              activeClassName="link"
              to={`product/${data.id}`}
            >
              More Details
            </Link>
          </div>
        </div>
        <div className="card__details">
          <div className="card__description">
            {data.description}
          </div>
          <div className="card__rating">
            <span>
              &#11088;
              {data.rating.rate}
            </span>

            <span>
              {data.rating.count}
              &#128100;
            </span>

          </div>
          <div className="card__total">
            <h3>Total Price : </h3>
            <p>
              $
              {data.price}
            </p>
          </div>
          <div
            className="card__add"
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
      <div className="card__right">
        <img src={data.image} alt={data.title} />
      </div>
    </div>
  );
}
