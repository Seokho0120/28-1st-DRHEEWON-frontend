import MainFullSlider from './MainFullSlider';
import MainFlexSlider from './MainFlexSlider';
import MainStickyArea from './MainStickyArea';
import MainNewJoin from './MainNewJoin';
import TopButton from '../../components/Buttons/TopButton';
import Footer from '../../components/Footer/Footer';

import './Main.scss';
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
      <Footer />
    </div>
  );
}
