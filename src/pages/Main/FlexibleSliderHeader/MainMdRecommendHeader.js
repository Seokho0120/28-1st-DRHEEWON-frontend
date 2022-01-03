import { useScrollFadeIn } from '../../../hooks/useScroll';
import { BorderButton } from '../../../components/Buttons/BorderButton';

export default function MainMdRecommendHeader({ selectedIcon, stateHandler }) {
  const flexSliderMenuWrapper = useScrollFadeIn();

  return (
    <section className="recommendBtnsWrapper">
      <div className="recommendBtnsContainer" {...flexSliderMenuWrapper}>
        <BorderButton
          type="longBoots"
          btnName="1"
          selectedIcon={selectedIcon}
          onClickMethod={stateHandler}
        />
        <BorderButton
          type="collabo"
          btnName="2"
          selectedIcon={selectedIcon}
          onClickMethod={stateHandler}
        />
        <BorderButton
          type="furBoots"
          btnName="3"
          selectedIcon={selectedIcon}
          onClickMethod={stateHandler}
        />
        <BorderButton
          type="accGoods"
          btnName="4"
          selectedIcon={selectedIcon}
          onClickMethod={stateHandler}
        />
      </div>
    </section>
  );
}
