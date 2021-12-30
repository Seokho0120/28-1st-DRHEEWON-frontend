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
        className="flexibleSliderContainer active"
        style={{ transform: `translateX(-${sliderPosition * 1140}px)` }}
      >
        {products.length > 0
          ? products.map((item, flexIndex) => {
              if (flexIndex % 2 === 0) {
                return (
                  <div key={flexIndex} className="flexibleSliderContentsEach">
                    {products.map((item, index) => {
                      if (index <= flexIndex + 1 && index >= flexIndex)
                        return (
                          <div
                            key={index}
                            className="flexibleSliderContentsEachWrapper"
                          >
                            {sectionArea === 'bestIcon'
                              ? bestIconDetail(item)
                              : ''}
                            {sectionArea === 'mdRecommend'
                              ? mdRecommendDetail(item)
                              : ''}
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
      <div className="flexibleSliderBtn">
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
