import React, { useState } from 'react';
import './ProductDetail.scss';
// import '../../styles/baseStyle/colors.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
// {
//   <FontAwesomeIcon icon={faSearch} />;
// }

export default function ProductDetail() {
  const [slidePosition, setSlidePosition] = useState(0);

  const movePrev = () => {
    slidePosition > 0
      ? setSlidePosition(slidePosition - 1)
      : setSlidePosition(4);

    // slides의 인덱스 -1
  };

  const moveNext = () => {
    slidePosition < 4
      ? setSlidePosition(slidePosition + 1)
      : setSlidePosition(0);

    // slides의 인덱스 +1
  };

  return (
    <div className="container">
      <div id="slideShow">
        <ul
          className="slides"
          style={{ transform: `translateX(-${slidePosition * 560}px)` }}
        >
          <li className="slideContent">
            <img src="ProductDetail/drmartens1.jpeg" alt="drmartens1" />
          </li>
          <li className="slideContent">
            <img src="ProductDetail/drmartens2.jpeg" alt="drmartens2" />
          </li>
          <li className="slideContent">
            <img src="ProductDetail/drmartens3.jpeg" alt="drmartens3" />
          </li>
          <li className="slideContent">
            <img src="ProductDetail/drmartens4.jpeg" alt="drmartens4" />
          </li>
          <li className="slideContent">
            <img src="ProductDetail/drmartens5.jpeg" alt="drmartens5" />
          </li>
        </ul>
        <div className="slideButton">
          <button className="prev" onClick={movePrev}>
            &lang;
          </button>
          <button className="next" onClick={moveNext}>
            &rang;
          </button>
        </div>
      </div>

      <aside className="headerContainer">
        <div className="headerTop" />
        <div className="headerTitle" />
        <div className="headerGuide" />
        <div className="headerCenter">
          <div className="centerSize" />
          <div className="centerColor" />
          <div className="centerSet" />
        </div>
        <div className="headerBtn" />
      </aside>
    </div>
  );
}
