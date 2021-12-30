import React, { useEffect, useState } from 'react';
import './ProductDetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faShareAlt,
  faStar,
  faWonSign,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export default function ProductDetail() {
  const [slidePosition, setSlidePosition] = useState(0);
  const [size, setSize] = useState([]);
  const [color, setcolor] = useState([]);

  const movePrev = () => {
    slidePosition > 0
      ? setSlidePosition(slidePosition - 1)
      : setSlidePosition(4);
  };

  const moveNext = () => {
    slidePosition < 4
      ? setSlidePosition(slidePosition + 1)
      : setSlidePosition(0);
  };

  useEffect(() => {
    fetch('/ProductDetail/centerSize/centerSize.json', { method: 'GET' })
      .then(size => size.json())
      .then(size => setSize(size));
  }, []);

  // useEffect(() => {
  //   fetch('/ProductDetail/centerColor/centerColor.json', { method: 'GET' })
  //     .then(color => color.json())
  //     .then(color => setcolor(color));
  // }, []);

  return (
    <div className="container">
      <div className="slideShow">
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

      <aside className="productDetail">
        <div className="detailTop">
          <FontAwesomeIcon icon={faShareAlt} />
          <div className="topFaheart">
            <FontAwesomeIcon icon={faHeart} />
            <span>7552</span>
          </div>
          <div className="topStar">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <span>716건</span>
          </div>
        </div>
        <div className="detailTitle">
          <span>제이든</span>
        </div>
        <div className="detailGuide">
          <button>
            <span>회원 혜택 보기</span>
          </button>
        </div>
        <div className="detailCenter">
          <button className="centerCount">
            <span>
              원하는 사이즈가 품절인가요?
              <div className="centerCountUnderline" />
            </span>
          </button>
          <div className="centerSizeDetail">
            {size.map(sizeItem => {
              return (
                <button className="centerSize" key={sizeItem.id}>
                  <p>{sizeItem.centerSize}</p>
                </button>
              );
            })}
          </div>
          <div className="centerColorDetail">
            <button className="btnBlack" />
            <button className="btnWhite" />
            <button className="btnBrown" />
            {/* {color.map(colorItem => {
                return (
                  <button className="centerColor" key={colorItem.id}>
                    <p style={{ color: colorItem.centerColor }}>
                      {colorItem.centerColor}
                    </p>
                  </button>
                );
              })} */}
            {/* 컬러를 map함수를 이용해서 사용하고 싶은데 아직 모르겠습니다 */}
          </div>
          <div className="centerOption">
            <div className="set">
              <p className="count">수량</p>
              <input type="text" />
              <button className="minus">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <button className="plus">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div className="price">
              <FontAwesomeIcon icon={faWonSign} />
              280,000
            </div>
          </div>
        </div>
        <div className="detailBtn">
          <button className="cart">장바구니</button>
          <button className="buy">구매하기</button>
        </div>
      </aside>
    </div>
  );
}
