import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Jewelery from './pages/Jewelery';
import MenClothing from './pages/MenClothing';
import WomenClothing from './pages/WomenClothing';
import Electronics from './pages/Electronics';
import Route from './Route';

export default function App() {
  const [menClothing, setMenClothing] = useState(null);
  const [womenClothing, setWomenClothing] = useState(null);
  const [electronics, setElectronics] = useState(null);
  const [jewelery, setJewelery] = useState(null);
  const productURL = 'https://fakestoreapi.com/products/category/';
  const [electronicsCart, updateElectronicsCart] = useState([]);
  const [menClothingcart, updateMenClothingCart] = useState([]);
  const [womenClothingcart, updateWomenClothingCart] = useState([]);
  const [jewelerycart, updateJeweleryCart] = useState([]);
  useEffect(() => {
    async function fetchJewelery() {
      const response = await fetch(`${productURL}jewelery`);
      const data = await response.json();
      setJewelery(data);
    }
    fetchJewelery();
    async function fetchMenClothing() {
      const response = await fetch(`${productURL}men's clothing`);
      const data = await response.json();
      setMenClothing(data);
    }
    fetchMenClothing();
    async function fetchWomenClothing() {
      const response = await fetch(`${productURL}women's clothing`);
      const data = await response.json();
      setWomenClothing(data);
    }
    fetchWomenClothing();
    async function fetchElectronics() {
      const response = await fetch(`${productURL}electronics`);
      const data = await response.json();
      setElectronics(data);
    }
    fetchElectronics();
  }, []);

  return (
    <div>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/men-clothing">
        <MenClothing
          data={menClothing}
          cart={menClothingcart}
          updateCart={updateMenClothingCart}
        />
      </Route>
      <Route path="/women-clothing">
        <WomenClothing
          data={womenClothing}
          cart={womenClothingcart}
          updateCart={updateWomenClothingCart}
        />
      </Route>
      <Route path="/electronics">
        <Electronics
          data={electronics}
          cart={electronicsCart}
          updateCart={updateElectronicsCart}
        />
      </Route>
      <Route path="/jewelery">
        <Jewelery
          data={jewelery}
          cart={jewelerycart}
          updateCart={updateJeweleryCart}
        />
      </Route>

    </div>
  );
}

// run command - bin/webpack-dev-server
