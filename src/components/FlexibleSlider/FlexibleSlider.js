import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import { useScrollFadeIn } from '../../hooks/useScroll';

import {
  MainSlideButton,
  MainBorderButton,
} from '../../components/Buttons/Button';

export function FlexibleSlider({ sectionArea, products }) {
  const [sliderPosition, setSliderPosition] = useState(0);

  const flexibleSliderWrapper = useScrollFadeIn();

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

  const bestIconDetail = item => {
    return (
      <>
        <img src={item.imgPath} alt="dummy" />
        <img src={item.imgPath} alt="dummy" />
        <div className="bestIconContentsEachDetail strong">
          <div className="detailLeft">
            <p>{item.name}</p>
            <p>오리지널 | 블랙</p>
            <span>
              <FontAwesomeIcon icon={faHeart} />
              {item.like}
            </span>
          </div>
          <div className="detailRight">
            <p>{item.amount}</p>
            <MainBorderButton type="putCart" />
          </div>
        </div>
      </>
    );
  };

  const mdRecommendDetail = item => {
    return (
      <div className="mdRecommendDetail strong">
        <p>{item.name}</p>
        <span>
          <FontAwesomeIcon icon={faHeart} />
          {item.like}
        </span>
        <div className="flexSliderImages">
          <img src={item.imgPath} alt="dummy" />
          <img src={item.imgPath} alt="dummy" />
        </div>
        <div className="detailBox">
          <p>{item.amount}</p>
          <MainBorderButton type="putCart" />
        </div>
      </div>
    );
  };

  return (
    <section className="flexibleSliderWrapper" {...flexibleSliderWrapper}>
      <div
        className="flexibleSliderContainer"
        style={{ transform: `translateX(-${sliderPosition * 1140}px)` }}
      >
        {products.length > 0 &&
          products.map((item, flexIndex) => {
            return (
              flexIndex % 2 === 0 && (
                <div
                  key={flexIndex}
                  className={`flexibleSliderContentsEach ${
                    sliderPosition === flexIndex / 2 ? 'active' : ''
                  }`}
                >
                  {products.map((item, index) => {
                    return (
                      index <= flexIndex + 1 &&
                      index >= flexIndex && (
                        <div
                          key={index}
                          className="flexibleSliderContentsEachWrapper"
                        >
                          {sectionArea === 'bestIcon' && bestIconDetail(item)}
                          {sectionArea === 'mdRecommend' &&
                            mdRecommendDetail(item)}
                        </div>
                      )
                    );
                  })}
                </div>
              )
            );
          })}
      </div>
      <div className="flexibleSliderBtn">
        <MainSlideButton type="slidePrev" onClickMethod={sliderClick} />
        <div className="slideDots">
          {products.map((item, index) => {
            return (
              index % 2 === 0 && (
                <span
                  key={index}
                  className={
                    sliderPosition === Math.ceil(index / 2) ? 'active' : ''
                  }
                />
              )
            );
          })}
        </div>
        <MainSlideButton type="slideNext" onClickMethod={sliderClick} />
      </div>
    </section>
  );
}
