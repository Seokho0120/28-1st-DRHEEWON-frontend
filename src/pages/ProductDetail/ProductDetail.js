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
  const [qunatity, setQunatity] = useState(1);
  // console.log(typeof number);
  // console.log(typeof detailData.price);

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

  const sizeBtnColorChange = idx => {
    sizeColor === 'white' ? setsizeColor('black') : setsizeColor('white');
  };

  const minusNumber = () => {
    qunatity === 1 ? setQunatity(1) : setQunatity(qunatity - 1);
  };

  const plusNumber = () => {
    setQunatity(qunatity + 1);
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
        qunatity={qunatity}
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
