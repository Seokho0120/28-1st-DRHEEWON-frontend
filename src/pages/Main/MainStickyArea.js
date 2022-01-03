import { useState, useEffect } from 'react';
import throttle from '../../customlib/throttle';

import { BorderButton } from '../../components/Buttons/BorderButton';

const stickyImgs = {
  introduce: 'images/3.png',
  vision: 'images/visionImg.jpg',
};

export default function MainStickyArea({ sectionArea }) {
  const [introOpacity, setIntroOpacity] = useState(1);
  const [introScale, setIntroScale] = useState(1);
  const [stickyPos, setStickyPos] = useState(0);
  const [visionOpacity, setVisionOpacity] = useState(1);
  const [visionScale, setVisionScale] = useState(1);

  const stickyStates = {
    introduce: {
      opacity: introOpacity,
      scale: introScale,
    },
    vision: {
      opacity: visionOpacity,
      scale: visionScale,
    },
  };

  useEffect(() => {
    function handleScroll() {
      const scrollPos = window.scrollY;

      const introBlind = scrollPos > 3200 && scrollPos < 3850;
      const introScale = scrollPos > 3500 && scrollPos < 3850;
      const stickyShoePos = scrollPos > 5400 && scrollPos < 6400;
      const visionBlind = scrollPos > 7700 && scrollPos < 8300;
      const visionScale = scrollPos > 8000 && scrollPos < 8300;

      if (introBlind) setIntroOpacity(1 - (scrollPos - 3200) / 1000);
      if (introScale) setIntroScale(1 + (scrollPos - 3500) / 3500);
      if (stickyShoePos) setStickyPos((scrollPos - 5400) / 5);
      if (visionBlind) setVisionOpacity(1 - (scrollPos - 7700) / 1000);
      if (visionScale) setVisionScale(1 + (scrollPos - 8000) / 8000);
    }

    window.addEventListener('scroll', throttle(handleScroll, 10));

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stickyImages = () => {
    return sectionArea === 'introduce' || sectionArea === 'vision' ? (
      <div
        className="stickyImage"
        style={{
          transform: `scale(${stickyStates[sectionArea].scale})`,
          backgroundImage: `url(${stickyImgs[sectionArea]})`,
          opacity: `${stickyStates[sectionArea].opacity}`,
        }}
      />
    ) : (
      sectionArea === 'introShoe' && (
        <div className="stickyShoes">
          <img
            src="images/stickyLeftShoe.png"
            alt="left"
            style={{ transform: `translateX(${stickyPos}px)` }}
          />
          <img
            src="images/stickyRightShoe.png"
            alt="right"
            style={{ transform: `translateX(-${stickyPos}px)` }}
          />
        </div>
      )
    );
  };

  const stickyHeader = () => {
    return sectionArea === 'introduce' ? (
      <div className="stickyHeader" style={{ color: 'white' }}>
        <span className="strong">WELCOME TO</span>
        <span className="strong">DRHW MEMBERS</span>
      </div>
    ) : sectionArea === 'introShoe' ? (
      <div className="stickyHeader" style={{ paddingLeft: '600px' }}>
        <span style={{ fontSize: '36px', color: '#999' }}>오리지널</span>
        <span className="strong">겁나 좋은</span>
        <span className="strong">신발</span>
      </div>
    ) : (
      sectionArea === 'vision' && (
        <div className="stickyHeader" style={{ color: 'white' }}>
          <span className="strong" style={{ color: '#999' }}>
            닥터희원
          </span>
          <span className="strong">반항적인</span>
          <span className="strong">이름 표현의 역사</span>
        </div>
      )
    );
  };

  const stickyBodyText = () => {
    return sectionArea === 'introduce' ? (
      <div className="stickyBody" style={{ color: 'white' }}>
        <span className="underbarSpan" />
        <div className="stickyBodyText">
          For Your Unique Identity
          <br />
          신규 가입시 10% 쿠폰 즉시 지급
          <a href="#!">
            <BorderButton type="goMoreWhite" />
          </a>
        </div>
      </div>
    ) : sectionArea === 'introShoe' ? (
      <div
        className="stickyBody"
        style={{ paddingLeft: '600px', color: '#666' }}
      >
        <span className="underbarSpan black" />
        <div
          className="stickyBodyText"
          style={{ fontSize: '26px', lineHeight: '40px' }}
        >
          2021년 12월 31일
          <br />
          닥터희원이 가장 처음 선보인
          <br />
          겁나 좋은 신발의 탄생을 기념하기 위해
          <br />
          대놓고 이름을 지었습니다.
          <br />
          <br />
          이렇듯 겁나 좋은 신발은 닥터희원의 역사를 상징하는 스니커즈로
          <br />
          자유를 향한 반항적 캐릭터를 내포하는
          <br />
          세상에 없던 단 하나의 신발입니다.
          <br />
          <br />
          닥터희원의 시작점이자, 지금을 함께하는
          <br />
          겁나 좋은 신발.
          <br />
          아래 버튼을 클릭해 확인해보세요.
          <br />
          <a href="#!">
            <BorderButton type="goMoreBlack" />
          </a>
        </div>
      </div>
    ) : (
      sectionArea === 'vision' && (
        <div className="stickyBody" style={{ color: 'white' }}>
          <span className="underbarSpan" />
          <div
            className="stickyBodyText"
            style={{ fontSize: '26px', lineHeight: '40px' }}
          >
            닥터희원은 세상에 없던 신발이라는 비전을 가지고
            <br />
            흔함을 거부하며 유니크함을 지향하는 사람들,
            <br />
            그리고 불협화음에 공감하는 사람들에게 어필합니다.
            <br />
            <br />
            객관적인 관점에서 닥터희원의 색다른 네이밍은
            <br />
            소비자들로 하여금 표현의 자유를 느끼도록 만들었으며
            <br />
            평범함이 녹아있는 일상 속에
            <br />
            결이 다른 제품으로 자리잡았습니다.
            <br />
            끝으로 이성적인 측면에서 닥터희원은
            <br />
            다름을 인정하는 하나의 아이콘과 같습니다.
            <a href="#!">
              <BorderButton type="goMoreWhite" />
            </a>
          </div>
        </div>
      )
    );
  };
  return (
    <section className="stickyWrapper">
      <div className="stickyContainer">
        {sectionArea === 'introShoe' && <div className="bg" />}
        {stickyImages()}
      </div>

      <div className="stickyContentWrapper">
        <div className="stickyContentContainer">
          {stickyHeader()}
          {stickyBodyText()}
        </div>
      </div>
    </section>
  );
}
