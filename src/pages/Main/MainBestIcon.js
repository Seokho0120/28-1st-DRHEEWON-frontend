import { useState } from 'react';
import { useScrollFadeIn } from '../../hooks/useScroll';

import MainBestIconContents from './MainBestIconContents';

export default function MainBestIcon() {
  const [selectedBestIcon, setSelectedBestIcon] = useState(1);

  const bestIconHeadText = useScrollFadeIn();
  const iconImagesWrapper = useScrollFadeIn();

  const stateHandler = event => {
    const name = event.target.getAttribute('name');

    switch (name) {
      case 'icon1':
        setSelectedBestIcon(1);
        break;
      case 'icon2':
        setSelectedBestIcon(2);
        break;
      case 'icon3':
        setSelectedBestIcon(3);
        break;
      case 'icon4':
        setSelectedBestIcon(4);
        break;
      case 'icon5':
        setSelectedBestIcon(5);
        break;
      case 'icon6':
        setSelectedBestIcon(6);
        break;
      default:
    }
  };

  return (
    <section className="bestIconSection">
      <header>
        <h1 {...bestIconHeadText}>베스트 아이콘</h1>
      </header>
      <div className="sectionMargin" />
      <main className="iconImagesWrapper">
        <section className="iconImagesContainer" {...iconImagesWrapper}>
          <div
            className={`iconEach ${selectedBestIcon === 1 ? 'active' : ''}`}
            onClick={stateHandler}
            name="icon1"
          >
            <div className="iconImage">
              <img src="images/black_shoe.png" alt="dummy" />
            </div>
            <h3 className={`${selectedBestIcon === 1 ? 'active' : ''}`}>
              슈즈1
            </h3>
          </div>
          <div
            className={`iconEach ${selectedBestIcon === 2 ? 'active' : ''}`}
            onClick={stateHandler}
            name="icon2"
          >
            <div className="iconImage">
              <img src="images/black_shoe.png" alt="dummy" />
            </div>
            <h3 className={`${selectedBestIcon === 2 ? 'active' : ''}`}>
              슈즈2
            </h3>
          </div>
          <div
            className={`iconEach ${selectedBestIcon === 3 ? 'active' : ''}`}
            onClick={stateHandler}
            name="icon3"
          >
            <div className="iconImage">
              <img src="images/black_shoe.png" alt="dummy" />
            </div>
            <h3 className={`${selectedBestIcon === 3 ? 'active' : ''}`}>
              슈즈3
            </h3>
          </div>
          <div
            className={`iconEach ${selectedBestIcon === 4 ? 'active' : ''}`}
            onClick={stateHandler}
            name="icon4"
          >
            <div className="iconImage">
              <img src="images/black_shoe.png" alt="dummy" />
            </div>
            <h3 className={`${selectedBestIcon === 4 ? 'active' : ''}`}>
              슈즈4
            </h3>
          </div>
          <div
            className={`iconEach ${selectedBestIcon === 5 ? 'active' : ''}`}
            onClick={stateHandler}
            name="icon5"
          >
            <div className="iconImage">
              <img src="images/black_shoe.png" alt="dummy" />
            </div>
            <h3 className={`${selectedBestIcon === 5 ? 'active' : ''}`}>
              슈즈5
            </h3>
          </div>
          <div
            className={`iconEach ${selectedBestIcon === 6 ? 'active' : ''}`}
            onClick={stateHandler}
            name="icon6"
          >
            <div className="iconImage">
              <img src="images/black_shoe.png" alt="dummy" />
            </div>
            <h3 className={`${selectedBestIcon === 6 ? 'active' : ''}`}>
              슈즈6
            </h3>
          </div>
        </section>
      </main>
      <div className="sectionMargin" />
      <MainBestIconContents selectedBestIcon={selectedBestIcon} />
      <div className="sectionMargin" />
    </section>
  );
}
