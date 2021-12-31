import { useState } from 'react';
import { useScrollFadeIn } from '../../hooks/useScroll';

import { MainBorderButton } from '../../components/Buttons/Button';
import { bestIconImagesData } from './MainMockData';

import MainFlexSliderFetch from './MainFlexSliderFetch';

export default function MainFlexArea({ sectionArea }) {
  const [selectedIcon, setSelectedIcon] = useState(1);
  const sectionName = {
    bestIcon: '베스트 아이콘',
    mdRecommend: 'MD 추천',
  };

  const flexSliderHeadText = useScrollFadeIn();
  const flexSliderMenuWrapper = useScrollFadeIn();

  const stateHandler = event => {
    const name = event.target.getAttribute('name');
    setSelectedIcon(parseInt(name));
  };

  const bestIconImgs = () => {
    const bestIconImages = bestIconImagesData;
    return (
      <section className="iconImagesWrapper">
        <div className="iconImagesContainer" {...flexSliderMenuWrapper}>
          {bestIconImages.map((item, index) => (
            <div
              key={index}
              className={`iconEach ${
                selectedIcon === index + 1 ? 'active' : ''
              }`}
              onClick={stateHandler}
              name={`${index + 1}`}
            >
              <div className="iconImage">
                <img src={item.imgPath} alt="dummy" />
              </div>
              <h3 className={`${selectedIcon === index + 1 ? 'active' : ''}`}>
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const mdRecommendBtns = () => {
    return (
      <section className="recommendBtnsWrapper">
        <div className="recommendBtnsContainer" {...flexSliderMenuWrapper}>
          <MainBorderButton
            type="longBoots"
            btnName="1"
            selectedIcon={selectedIcon}
            onClickMethod={stateHandler}
          />
          <MainBorderButton
            type="collabo"
            btnName="2"
            selectedIcon={selectedIcon}
            onClickMethod={stateHandler}
          />
          <MainBorderButton
            type="furBoots"
            btnName="3"
            selectedIcon={selectedIcon}
            onClickMethod={stateHandler}
          />
          <MainBorderButton
            type="accGoods"
            btnName="4"
            selectedIcon={selectedIcon}
            onClickMethod={stateHandler}
          />
        </div>
      </section>
    );
  };

  return (
    <section className="flexSliderSection">
      <header>
        <h1 {...flexSliderHeadText}>{sectionName[sectionArea]}</h1>
      </header>
      <div className="sectionMargin" />
      {sectionArea === 'bestIcon' && bestIconImgs()}
      {sectionArea === 'mdRecommend' && mdRecommendBtns()}
      <div className="sectionMargin" />
      <MainFlexSliderFetch
        sectionArea={sectionArea}
        selectedIcon={selectedIcon}
      />
      <div className="sectionMargin" />
    </section>
  );
}
