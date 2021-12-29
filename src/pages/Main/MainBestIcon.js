import { useState } from 'react';
import { useScrollFadeIn } from '../../hooks/useScroll';

import MainBestIconContents from './MainBestIconContents';

export default function MainBestIcon() {
  const [selectedBestIcon, setSelectedBestIcon] = useState(1);
  const bestIconImages = [
    {
      id: '1',
      imgPath: 'images/black_shoe.png',
    },
    {
      id: '2',
      imgPath: 'images/black_shoe.png',
    },
    {
      id: '3',
      imgPath: 'images/black_shoe.png',
    },
    {
      id: '4',
      imgPath: 'images/black_shoe.png',
    },
    {
      id: '5',
      imgPath: 'images/black_shoe.png',
    },
    {
      id: '6',
      imgPath: 'images/black_shoe.png',
    },
  ];

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
          {bestIconImages.map((item, index) => (
            <div
              key={index}
              className={`iconEach ${
                selectedBestIcon === index + 1 ? 'active' : ''
              }`}
              onClick={stateHandler}
              name={`icon${index + 1}`}
            >
              <div className="iconImage">
                <img src={item.imgPath} alt="dummy" />
              </div>
              <h3
                className={`${selectedBestIcon === index + 1 ? 'active' : ''}`}
              >
                슈즈{item.id}
              </h3>
            </div>
          ))}
        </section>
      </main>
      <div className="sectionMargin" />
      <MainBestIconContents selectedBestIcon={selectedBestIcon} />
      <div className="sectionMargin" />
    </section>
  );
}
