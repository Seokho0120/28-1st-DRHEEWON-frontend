import { useState } from 'react';
import { useScrollFadeIn } from '../../hooks/useScroll';

import MainFlexSliderFetch from './MainFlexSliderFetch';
import MainBestIconHeader from './FlexibleSliderHeader/MainBestIconHeader';
import MainMdRecommendHeader from './FlexibleSliderHeader/MainMdRecommendHeader';

const sectionName = {
  bestIcon: '베스트 아이콘',
  mdRecommend: 'MD 추천',
};

export default function MainFlexArea({ sectionArea }) {
  const [selectedIcon, setSelectedIcon] = useState(1);

  const flexSliderHeadText = useScrollFadeIn();

  const stateHandler = event => {
    const name = event.target.getAttribute('name');
    setSelectedIcon(parseInt(name));
  };

  return (
    <section className="flexSliderSection">
      <header>
        <h1 className="strong" {...flexSliderHeadText}>
          {sectionName[sectionArea]}
        </h1>
      </header>
      <div className="sectionMargin" />
      {sectionArea === 'bestIcon' && (
        <MainBestIconHeader
          selectedIcon={selectedIcon}
          stateHandler={stateHandler}
        />
      )}
      {sectionArea === 'mdRecommend' && (
        <MainMdRecommendHeader
          selectedIcon={selectedIcon}
          stateHandler={stateHandler}
        />
      )}
      <div className="sectionMargin" />
      <MainFlexSliderFetch
        sectionArea={sectionArea}
        selectedIcon={selectedIcon}
      />
      <div className="sectionMargin" />
    </section>
  );
}
