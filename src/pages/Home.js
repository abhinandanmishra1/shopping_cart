import React, { useState, useEffect } from 'react';
import Link from '../Link';
import Navbar from '../ui/Navbar';

export default function Home() {
  const [categories, setCategories] = useState(null);
  const categoriesURL = 'https://fakestoreapi.com/products/categories';
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(categoriesURL);
      const data = await response.json();
      setCategories(data);
    }

    fetchData();
  }, []);
  return (
    <div className="app">
      <Navbar />
      <div className="app__categories">
        {
          categories && categories.map((item) => (
            <div className="app__category">
              <Link
                className="link"
                href={item.split("'s ").join('-')}
              >
                {item.split("'s ")
                  .map((subitem) => (
                    subitem[0].toUpperCase()
                       + subitem.slice(1))).join('-')}
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}
