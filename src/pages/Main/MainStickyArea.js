import { useState, useEffect } from 'react';
import { MainBorderButton } from '../../components/Buttons/Button';
import { throttle } from 'lodash';

export default function MainStickyArea() {
  const [imageOpacity, setImageOpacity] = useState(1);
  const [imageScale, setImageScale] = useState(1);

  const checkScrollPos = scrollPos => {
    const divideScrollPos = {
      [scrollPos > 2200 && scrollPos < 2850]: 2200,
    };

    return divideScrollPos.true;
  };

  useEffect(() => {
    function handleScroll() {
      const scrollPos = window.scrollY;
      const firstBlind =
        scrollPos - checkScrollPos(scrollPos) > 0 &&
        scrollPos - checkScrollPos(scrollPos) < 450;

      const firstScale =
        scrollPos - checkScrollPos(scrollPos) > 300 &&
        scrollPos - checkScrollPos(scrollPos) < 650;

      if (firstBlind) setImageOpacity(1 - (scrollPos - 2200) / 1000);
      if (firstScale) setImageScale(1 + (scrollPos - 2500) / 2500);
    }

    window.addEventListener('scroll', throttle(handleScroll, 10));

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="stickyWrapper">
      <div className="stickyImageContainer">
        <div
          className="stickyImage"
          style={{
            transform: `scale(${imageScale})`,
            backgroundImage: 'url(images/3.png)',
            opacity: `${imageOpacity}`,
          }}
        />
      </div>

      <div className="stickyContentWrapper">
        <div className="stickyContentContainer">
          <div className="stickyHeader">
            <span className="strong">WELCOME TO</span>
            <span className="strong">DRHW MEMBERS</span>
          </div>
          <div className="stickyBody">
            <span className="underbarSpan" />
            <div className="stickyBodyText">
              <p>For Your Unique Identity</p>
              <p>신규 가입시 10% 쿠폰 즉시 지급</p>
              <a href="#!">
                <MainBorderButton type="goMoreWhite" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
