import React, { useEffect, useState } from 'react';
import SlideShow from './SlideShow/SlideShow';
import ProductContent from './ProductContent/ProductContent';
import ProductExplain from './ProductExplain/ProductExplain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShareAlt,
  faStar,
  faWonSign,
  faMinus,
  faPlus,
  faSquare,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './ProductDetail.scss';

export default function ProductDetail() {
  const [slidePosition, setSlidePosition] = useState(0);
  const [detailData, setDetailData] = useState({});
  const [sizeColor, setsizeColor] = useState('white');
  const [number, setNumber] = useState(1);
  const [price, setPrice] = useState(detailData.price);
  // console.log(detailData.price * 2);

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

  const sizeBtnColorChange = () => {
    sizeColor === 'white' ? setsizeColor('black') : setsizeColor('white');
  };

  const minusNumber = () => {
    number === 1 ? setNumber(1) : setNumber(number - 1);
  };

  const plusNumber = () => {
    setNumber(number + 1);
    // {detailData.price}의 값을 받아서 같은 값을 계속 더해줌
    // state에 {detailData.price}의 값을 어떻게 담아야할지 모르겠음
    // mock data에서 가격이 문자열인데 숫자로 받아야할지? parseInt..?
    // setPrice(price * 2);
  };

  useEffect(() => {
    fetch('/ProductDetail/product/jaden.json', { method: 'GET' })
      .then(data => data.json())
      .then(data => setDetailData(data));
  }, []);

  return (
    <div className="container">
      <SlideShow
        slidePosition={slidePosition}
        movePrev={movePrev}
        moveNext={moveNext}
      />
      <ProductContent
        FontAwesomeIcon={FontAwesomeIcon}
        faShareAlt={faShareAlt}
        faHeart={faHeart}
        faStar={faStar}
        detailData={detailData}
        sizeBtnColorChange={sizeBtnColorChange}
        sizeColor={sizeColor}
        number={number}
        minusNumber={minusNumber}
        faMinus={faMinus}
        plusNumber={plusNumber}
        faPlus={faPlus}
        faWonSign={faWonSign}
      />
      <ProductExplain
        detailData={detailData}
        FontAwesomeIcon={FontAwesomeIcon}
        faSquare={faSquare}
      />
      <div className="test">어렵다 하하하하*^_^*</div>
    </div>
  );
}
