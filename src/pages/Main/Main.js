import MainFullSlider from './MainFullSlider';

import MainStickyArea from './MainStickyArea';
import MainFlexSlider from './MainFlexSlider';

import './Main.scss';

export default function Main() {
  return (
    <div className="mainWrapper">
      <MainFullSlider />
      <div className="sectionMargin" />
      <MainFlexSlider sectionArea="bestIcon" />
      <MainStickyArea />
      <div className="sectionMargin" />
      <MainFlexSlider sectionArea="mdRecommend" />
    </div>
  );
}
