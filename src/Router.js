import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';

export default function Router() {
  const [windowY, setWindowY] = useState();
  const [visibleValue, setVisibleValue] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const isScrollUp = windowY > window.scrollY;
      isScrollUp ? setVisibleValue(true) : setVisibleValue(false);
      setWindowY(window.scrollY);
    }

    window.addEventListener('scroll', throttle(handleScroll, 10));
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [windowY, visibleValue]);

  return (
    <BrowserRouter>
      <Nav visibleValue={visibleValue} />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
