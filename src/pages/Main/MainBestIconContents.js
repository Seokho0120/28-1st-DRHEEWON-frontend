import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { useScrollFadeIn } from '../../hooks/useScroll';

export default function MainBestIconPage({ selectedBestIcon }) {
  const [products, setProducts] = useState([]);
  const [sliderPosition, setSliderPosition] = useState(0);

  const bestIconContentsWrapper = useScrollFadeIn();

  useEffect(() => {
    setProducts([
      {
        id: 1,
        imgPath: 'images/black_shoe.png',
      },
      {
        id: 2,
        imgPath: 'images/black_shoe.png',
      },
      {
        id: 3,
        imgPath: 'images/black_shoe.png',
      },
      {
        id: 4,
        imgPath: 'images/black_shoe.png',
      },
      {
        id: 5,
        imgPath: 'images/black_shoe.png',
      },
      {
        id: 6,
        imgPath: 'images/black_shoe.png',
      },
    ]);
  }, []);

  const sliderClick = event => {
    const { name } = event.target;
    switch (name) {
      case 'slidePrev':
        sliderPosition > 0
          ? setSliderPosition(sliderPosition - 1)
          : setSliderPosition(products.length / 2 - 1);
        break;
      case 'slideNext':
        sliderPosition < Math.floor(products.length / 2) - 1
          ? setSliderPosition(sliderPosition + 1)
          : setSliderPosition(0);
        break;
      default:
    }
  };

  return (
    <section className="bestIconContentsWrapper" {...bestIconContentsWrapper}>
      <div
        className="bestIconContentsContainer"
        style={{ transform: `translateX(-${sliderPosition * 1140}px)` }}
      >
        {products.length > 0
          ? products.map((item, flexIndex) => {
              if (flexIndex % 2 === 0) {
                return (
                  <div key={flexIndex} className="bestIconContentsEach">
                    {products.map((item, index) => {
                      if (index <= flexIndex + 1 && index >= flexIndex)
                        return (
                          <div
                            key={index}
                            className="bestIconContentsEachWrapper"
                          >
                            <img src={item.imgPath} alt="dummy" />
                            <img src={item.imgPath} alt="dummy" />
                            <div className="bestIconContentsEachDetail">
                              <div className="detailLeft">
                                <p className="strong">1461 스무스</p>
                                <p>오리지널 | 블랙</p>
                                <span>
                                  <FontAwesomeIcon icon={faHeart} />
                                  5143
                                </span>
                              </div>
                              <div className="detailRight strong">
                                <p>₩ 190,000</p>
                                <button className="cartBtn">
                                  <span>장바구니 담기</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                    })}
                  </div>
                );
              }
            })
          : ''}
      </div>
      <div className="bestIconContentsBtn">
        <button name="slidePrev" onClick={sliderClick}>
          <span>&lang;</span>
        </button>
        <div className="bestIconLengthDot">
          {products.map((item, index) => {
            if (index % 2 === 0)
              return (
                <span
                  key={index}
                  className={
                    sliderPosition === Math.ceil(index / 2) ? 'active' : ''
                  }
                />
              );
            return '';
          })}
        </div>
        <button name="slideNext" onClick={sliderClick}>
          <span>&rang;</span>
        </button>
      </div>
    </section>
  );
}
