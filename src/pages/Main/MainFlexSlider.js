import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { useScrollFadeIn } from '../../hooks/useScroll';

import {
  MainBorderButton,
  MainSlideButton,
} from '../../components/Buttons/Button';

export default function MainBestIconPage({ selectedBestIcon }) {
  const [products, setProducts] = useState([]);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [delayRender, setDelayRender] = useState();

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
    setDelayRender(false);
    setTimeout(() => {
      setDelayRender(true);
    }, 500);
  }, []);

  const sliderClick = event => {
    const { name } = event.target;
    switch (name) {
      case 'slidePrev':
        sliderPosition > 0
          ? setSliderPosition(sliderPosition - 1)
          : setSliderPosition(Math.round(products.length / 2 - 1));
        break;
      case 'slideNext':
        sliderPosition < Math.round(products.length / 2 - 1)
          ? setSliderPosition(sliderPosition + 1)
          : setSliderPosition(0);
        break;
      default:
    }
  };

  return (
    <section className="bestIconContentsWrapper" {...bestIconContentsWrapper}>
      <div
        className={`bestIconContentsContainer  ${delayRender ? 'active' : ''}`}
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
                            {/* <div className="bestIconContentsEachDetail">
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
                                <MainBorderButton type="putCart" />
                              </div>
                            </div> */}
                          </div>
                        );
                      return '';
                    })}
                  </div>
                );
              }
              return '';
            })
          : ''}
      </div>
      <div className="bestIconContentsBtn">
        <MainSlideButton type="slidePrev" onClickMethod={sliderClick} />
        <div className="slideDots">
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
        <MainSlideButton type="slideNext" onClickMethod={sliderClick} />
      </div>
    </section>
  );
}
