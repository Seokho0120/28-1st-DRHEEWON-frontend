import { useState, useEffect } from 'react';

import { SliderButton } from '../../components/Buttons/SliderButton';
import { slideImgsData } from './MainMockData';

const laptopSize = 1626;

export default function MainFullSlider() {
  const [sliderPosition, setSliderPosition] = useState(1);
  const [stopTran, setStopTran] = useState(false);
  const [isWindowExtend, setIsWindowExtend] = useState(
    window.innerWidth > laptopSize
  );

  const slideImgs = slideImgsData;

  useEffect(() => {
    function handleResize(event) {
      event.target.innerWidth > 1626
        ? setIsWindowExtend(true)
        : setIsWindowExtend(false);
    }
    window.addEventListener('resize', handleResize);
    const interval = setInterval(() => {
      setSliderPosition(current => {
        return current + 1;
      });
    }, 3000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (sliderPosition === 4 || sliderPosition === 0) {
      setTimeout(() => {
        setStopTran(true);
        sliderPosition === 4 ? setSliderPosition(1) : setSliderPosition(3);
      }, 450);
    } else {
      setTimeout(async () => {
        setStopTran(false);
      }, 100);
    }
  }, [sliderPosition]);
  const clickSliderBtn = event => {
    const { name } = event.target;
    switch (name) {
      case 'slidePrev':
        setSliderPosition(sliderPosition - 1);
        break;
      case 'slideNext':
        setSliderPosition(sliderPosition + 1);
        break;
      default:
    }
  };

  return (
    <section className="fullSliderSection">
      <div
        className={`fullSliderUl ${stopTran ? 'stopTran' : ''}`}
        style={{
          transform: `translateX(-${
            isWindowExtend ? sliderPosition * 2114 : sliderPosition * 1607
          }px)`,
        }}
      >
        <div>
          <img
            src={slideImgs[slideImgs.length - 1].imgPath}
            alt="dummyDuplicate"
          />
        </div>
        {slideImgs.map((item, index) => (
          <div key={index}>
            <img src={slideImgs[index].imgPath} alt="dummy" />
          </div>
        ))}
        <div>
          <img src={slideImgs[0].imgPath} alt="dummyDuplicate" />
        </div>
      </div>
      <div className="fullSlideBtnArea">
        <SliderButton type="slidePrev" onClickMethod={clickSliderBtn} />
        <SliderButton type="slideNext" onClickMethod={clickSliderBtn} />
      </div>
      <div className="fullSlideDotsContainer">
        <div className="slideDots">
          {slideImgs.map((item, index) => (
            <span
              key={index}
              className={`yellow ${
                index + 1 === sliderPosition ? 'active' : ''
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
