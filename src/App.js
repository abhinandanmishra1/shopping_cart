import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Jewelery from './pages/Jewelery';
import MenClothing from './pages/MenClothing';
import WomenClothing from './pages/WomenClothing';
import Electronics from './pages/Electronics';
import Product from './pages/Product';
import { fetchData } from './utils/utils';

import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';

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
    async function getData() {
      const jeweleryData = await fetchData(`${productURL}jewelery`);
      setJewelery(jeweleryData);
      const electronicsData = await fetchData(`${productURL}electronics`);
      setElectronics(electronicsData);
      const menClothingData = await fetchData(`${productURL}men's clothing`);
      setMenClothing(menClothingData);
      const womenClothingData = 
      await fetchData(`${productURL}women's clothing`);
      setWomenClothing(womenClothingData);
    }
    getData();
  }, []);
  
  return (
    <div>

      <Router>
        <Routes>
          <Route
            element={<Home />} 
            path="/"
          />
          <Route path="/men-clothing" element={<MenClothing
              data={menClothing}
              cart={menClothingcart}
              updateCart={updateMenClothingCart}
            />} />
          
          <Route path="/women-clothing" element={<WomenClothing
              data={womenClothing}
              cart={womenClothingcart}
              updateCart={updateWomenClothingCart}
            />} />
            
          <Route path="/electronics" element={<Electronics
              data={electronics}
              cart={electronicsCart}
              updateCart={updateElectronicsCart}
            />} />
          <Route path="/jewelery" element={<Jewelery
              data={jewelery}
              cart={jewelerycart}
              updateCart={updateJeweleryCart}
            />}/> 
          <Route path=":category/product/:id" element={<Product />} />
        </Routes>
      </Router>

    </div>
  );
}