import { useState, useEffect } from 'react';

import { useScrollFadeIn } from '../../hooks/useScroll';

import { SliderButton } from '../../components/Buttons/SliderButton';
import MainBestIconDetail from '../../pages/Main/FlexibleSliderDetails/MainBestIconDetail';
import MainMdRecommendDetail from '../../pages/Main/FlexibleSliderDetails/MainMdRecommendDetail';

import BestIconSkeleton from './BestIconSkeleton';
import MdRecommendSkeleton from './MdRecommendSkeleton';

export function FlexibleSlider({ sectionArea, products, isLoad }) {
  const [sliderPosition, setSliderPosition] = useState(0);
  const flexibleSliderWrapper = useScrollFadeIn();

  useEffect(() => {
    setSliderPosition(0);
  }, [products]);

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
    <section className="flexibleSliderWrapper" {...flexibleSliderWrapper}>
      <div
        className="flexibleSliderContainer"
        style={{ transform: `translateX(-${sliderPosition * 1140}px)` }}
      >
        {isLoad ? (
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
                          {sectionArea === 'bestIcon' && (
                            <MainBestIconDetail item={item} />
                          )}
                          {sectionArea === 'mdRecommend' && (
                            <MainMdRecommendDetail item={item} />
                          )}
                        </div>
                      )
                    );
                  })}
                </div>
              )
            );
          })
        ) : (
          <>
            {sectionArea === 'bestIcon' && <BestIconSkeleton />}{' '}
            {sectionArea === 'mdRecommend' && <MdRecommendSkeleton />}
          </>
        )}
      </div>
      <div className="flexibleSliderBtn">
        <SliderButton type="slidePrev" onClickMethod={sliderClick} />
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
        <SliderButton type="slideNext" onClickMethod={sliderClick} />
      </div>
    </section>
  );
}
