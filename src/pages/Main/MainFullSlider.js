import { useState, useEffect } from 'react';
import { MainSlideButton } from '../../components/Buttons/Button';

export default function MainFullSlider() {
  const [sliderPosition, setSliderPosition] = useState(1);
  const [stopTran, setStopTran] = useState(false);
  const [isWindowExtend, setIsWindowExtend] = useState(
    window.innerWidth > 1626
  );

  const slideImgs = [
    {
      id: 1,
      imgPath: 'images/1.jpg',
    },
    {
      id: 2,
      imgPath: 'images/2.jpg',
    },
    {
      id: 3,
      imgPath: 'images/3.png',
    },
  ];

  useEffect(() => {
    function handleResize(event) {
      event.target.innerWidth > 1626
        ? setIsWindowExtend(true)
        : setIsWindowExtend(false);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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
            isWindowExtend ? sliderPosition * 1903 : sliderPosition * 1447
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
        <MainSlideButton type="slidePrev" onClickMethod={clickSliderBtn} />
        <MainSlideButton type="slideNext" onClickMethod={clickSliderBtn} />
      </div>
      <div className="fullSlideDotsContainer">
        <div className="slideDots">
          {slideImgs.map((item, index) => (
            <span
              key={index}
              className={index + 1 === sliderPosition ? 'active' : ''}
              style={{ backgroundColor: 'yellow' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
