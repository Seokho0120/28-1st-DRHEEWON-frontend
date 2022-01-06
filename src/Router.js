import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList.js';

export default function Router() {
  const [windowY, setWindowY] = useState();
  const [visibleValue, setVisibleValue] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const isScrollUp = windowY > window.scrollY;
      isScrollUp ? setVisibleValue(true) : setVisibleValue(false);
      setWindowY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [windowY, visibleValue]);

  return (
    <BrowserRouter>
      <Nav visibleValue={visibleValue} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/productList" element={<ProductList />} />

        <Route path="/products/:id" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}
