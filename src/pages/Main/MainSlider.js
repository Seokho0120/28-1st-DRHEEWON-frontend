import { useState, useEffect } from 'react';

export default function MainSlider() {
  const [sliderPosition, setSliderPosition] = useState(1);
  const [stopTran, setStopTran] = useState(false);
  const [isWindowExtend, setIsWindowExtend] = useState(
    window.innerWidth > 1626
  );
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
      case 'sliderPrev':
        setSliderPosition(sliderPosition - 1);
        break;
      case 'sliderNext':
        setSliderPosition(sliderPosition + 1);
        break;
      default:
    }
  };

  return (
    <section className="sliderSection">
      <ul
        className={`sliderUl ${stopTran ? 'stopTran' : ''}`}
        style={{
          transform: `translateX(-${
            isWindowExtend ? sliderPosition * 1920 : sliderPosition * 1626
          }px)`,
        }}
      >
        <li>
          <img src="images/3.png" alt="dummyDuplicate" />
        </li>
        <li>
          <img src="images/1.jpg" alt="dummy" />
        </li>
        <li>
          <img src="images/2.jpg" alt="dummy" />
        </li>
        <li>
          <img src="images/3.png" alt="dummy" />
        </li>
        <li>
          <img src="images/1.jpg" alt="dummyDuplicate" />
        </li>
      </ul>
      <div className="slideBtnArea">
        <button name="sliderPrev" onClick={clickSliderBtn}>
          &lang;
        </button>
        <button name="sliderNext" onClick={clickSliderBtn}>
          &rang;
        </button>
      </div>
    </section>
  );
}
