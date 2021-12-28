import React, { useState } from 'react';
import './ProductDetail.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
// {
//   <FontAwesomeIcon icon={faSearch} />;
// }

export default function ProductDetail() {
  const [slides, setSlides] = useState(0);
  // 버튼 클릭하면 이미지 넘어가게 하기
  return (
    <div className="container">
      <div id="slideShow">
        <ul
          className="slides"
          style={{ transform: `translateX(-${slides * 560}px)` }}
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
        <p className="controller">
          <span className="prev">&lang;</span>
          <span className="next">&rang;</span>
        </p>
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
