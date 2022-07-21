import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchData } from '../utils/utils';

export default function Product() {
  const { id } = useParams();
  const productURL = 'https://fakestoreapi.com/products/';
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await fetchData(`${productURL}${id}`);
      setProductData(data);
    }
    getData();
  }, [id]);

  return (
    <div className="productWrapper">
      {
        productData ? (
          <div className="product">
            <div className="product__left">
              <div className="product__main">
                <div className="product__header">
                  <h1>{productData.title}</h1>
                </div>
                <div className="product__focus">
                  <span>Details</span>
                </div>
              </div>
              <div className="product__details">
                <div className="product__description">
                  {productData.description}
                </div>
                <div className="product__rating">
                  <span>
                    &#11088;
                    {productData.rating.rate}
                  </span>

                  <span>
                    {productData.rating.count}
                    &#128100;
                  </span>

                </div>
                <div className="product__total">
                  <h3>Total Price : </h3>
                  <p>
                    $
                    {productData.price}
                  </p>
                </div>
                <div className="product__add">
                  <Link to="/"> Go to Home</Link>
                </div>
              </div>
            </div>
            <div className="product__right">
              <img src={productData.image} alt={productData.title} />
            </div>
          </div>
        )
          : (
            <h1>Loading....</h1>
          )
      }
    </div>
  );
}
