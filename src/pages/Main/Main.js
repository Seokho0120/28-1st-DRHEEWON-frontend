import MainSlider from './MainSlider';
import MainBestIcon from './MainBestIcon';
import MainStickyArea from './MainStickyArea';

import './Main.scss';

export default function Main() {
  return (
    <div className="mainWrapper">
      <MainSlider />
      <div className="sectionMargin" />
      <MainBestIcon />
      <MainStickyArea />
      <div className="sectionMargin" />
    </div>
  );
}
