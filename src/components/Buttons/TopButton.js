import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleTopBtnScroll() {
      const scrollPos = window.scrollY;

      setIsVisible(scrollPos > 1000);
    }

    window.addEventListener('scroll', throttle(handleTopBtnScroll, 100));

    return () => {
      window.removeEventListener('scroll', handleTopBtnScroll);
    };
  }, []);

  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <button
      className={`topBtn ${isVisible ? 'active' : ''} `}
      onClick={moveToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}
