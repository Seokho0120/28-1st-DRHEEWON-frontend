import { useScrollFadeIn } from '../../../hooks/useScroll';
import { bestIconImagesData } from '../MainMockData';

export default function MainBestIconHeader({ selectedIcon, stateHandler }) {
  const flexSliderMenuWrapper = useScrollFadeIn();

  const bestIconImages = bestIconImagesData;

  return (
    <section className="iconImagesWrapper">
      <div className="iconImagesContainer" {...flexSliderMenuWrapper}>
        {bestIconImages.map((item, index) => (
          <div
            key={index}
            className={`iconEach ${selectedIcon === index + 1 ? 'active' : ''}`}
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
}
