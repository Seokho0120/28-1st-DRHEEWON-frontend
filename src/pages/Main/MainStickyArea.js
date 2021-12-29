import { useState, useEffect } from 'react';
import { MainBorderButton } from '../../components/Buttons/Button';

export default function MainStickyArea() {
  const [imageOpacity, setImageOpacity] = useState(1);
  const [imageScale, setImageScale] = useState(1);

  useEffect(() => {
    function handleScroll(event) {
      if (window.scrollY > 2200 && window.scrollY < 2650) {
        setImageOpacity(1 - (window.scrollY - 2200) / 1000);
      }

      if (window.scrollY > 2500 && window.scrollY < 3050) {
        setImageScale(1 + (window.scrollY - 2500) / 1800);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="stickyWrapper">
      <div
        className="stickyImage"
        style={{
          transform: `scale(${imageScale})`,
          backgroundImage: 'url(images/1.jpg)',
          opacity: `${imageOpacity}`,
        }}
      />
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
