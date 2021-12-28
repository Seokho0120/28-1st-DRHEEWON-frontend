import MainSlider from './MainSlider';

import './Main.scss';
import MainBestIcon from './MainBestIcon';

export default function Main() {
  return (
    <div className="mainWrapper">
      <MainSlider />
      <div className="sectionMargin" />
      <MainBestIcon />
    </div>
  );
}
