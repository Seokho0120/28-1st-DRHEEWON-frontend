import MainFullSlider from './MainFullSlider';
import MainFlexSlider from './MainFlexSlider';
import MainStickyArea from './MainStickyArea';
import MainNewJoin from './MainNewJoin';

import './Main.scss';
import TopButton from '../../components/Buttons/TopButton';

export default function Main() {
  return (
    <div className="mainWrapper">
      <MainFullSlider />
      <div className="sectionMargin" />
      <MainFlexSlider sectionArea="bestIcon" />
      <div className="sectionMargin" />
      <MainFlexSlider sectionArea="mdRecommend" />
      <div className="sectionMargin" />
      <MainStickyArea sectionArea="introduce" />
      <MainStickyArea sectionArea="introShoe" />
      <MainStickyArea sectionArea="vision" />
      <MainNewJoin />
      <TopButton />
    </div>
  );
}
