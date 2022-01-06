import React, { useState } from 'react';

import getUserToken from '../../../customlib/getUserToken';
import config from '../../../config/config.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShareAlt,
  faStar,
  faWonSign,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export default function ProductContent({
  detailData,
  quantity,
  minusNumber,
  plusNumber,
}) {
  const [selectedSize, setSelectedSize] = useState(-1);

  const userToken = getUserToken();

  const handleSelectedSize = event => {
    event.preventDefault();
    const buttonIndex = Number(event.target.getAttribute('name'));
    buttonIndex === selectedSize
      ? setSelectedSize(-1)
      : setSelectedSize(buttonIndex);
  };

  const inputCart = () => {
    if (userToken) {
      fetch(`${config.BASE_URL}carts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'userToken',
        },
        body: JSON.stringify({
          product_id: detailData.id,
          quantity: quantity,
          size: selectedSize,
        }),
      }).then(res => {
        res.status === 201
          ? alert('장바구니에 담겼습니다.')
          : alert('오류입니다. 관리자에게 문의하세요.');
      });
    } else {
      alert('로그인부터 해주세요!');
    }
  };

  return (
    <aside className="productContent">
      <div className="detailTop">
        <FontAwesomeIcon icon={faShareAlt} />
        <div className="topFaHeart">
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
        <span>{detailData.productName}</span>
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
          {detailData.centerSize &&
            detailData.centerSize.map((sizeItem, idx) => {
              return (
                <button
                  key={idx}
                  name={idx}
                  className={`centerSize ${
                    selectedSize === idx ? 'active' : ''
                  }`}
                >
                  <p name={idx} onClick={handleSelectedSize}>
                    {sizeItem.size}
                  </p>
                </button>
              );
            })}
        </div>
        <div className="centerColorDetail">
          {detailData.centerColor &&
            detailData.centerColor.map((colorItem, idx) => {
              return (
                <button className={`centerColor ${colorItem}`} key={idx} />
              );
            })}
        </div>
        <div className="centerOption">
          <div className="set">
            <p className="count">수량</p>
            <input type="number" min="1" max="100" value={quantity} readOnly />
            <button onClick={minusNumber} className="minus">
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <button onClick={plusNumber} className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className="price">
            <FontAwesomeIcon icon={faWonSign} />
            <span>{(quantity * (detailData.price ?? 0)).toLocaleString()}</span>
            {/* <span>{detailData.price}</span> */}
          </div>
        </div>
      </div>
      <div className="detailBtn">
        <button className="cart" onClick={inputCart}>
          장바구니
        </button>
        <button className="buy">구매하기</button>
      </div>
    </aside>
  );
}
