import { useState, useEffect } from 'react';

export default function useToggleNav() {
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

  return { visibleValue };
}
