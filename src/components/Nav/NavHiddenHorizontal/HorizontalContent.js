import React, { useRef } from 'react';
import useHorizontalScroll from '../../../hooks/useHorizontalScroll';

import './HorizontalContent.scss';

export default function HorizontalContent() {
  const horizontalRef = useRef();

  const { horizontalPos, horizontalScrollPos } =
    useHorizontalScroll(horizontalRef);

  return (
    <section className="horizontalContent">
      <ul
        style={{ transform: `translateX(-${horizontalPos}px)` }}
        ref={horizontalRef}
      >
        <li className={`${horizontalPos > 245 * 2 ? 'hide' : ''}`}>
          <p className="strong">공식몰 혜택</p>
          <img src="images/3.jpeg" alt="benefit" />
        </li>
        <li>
          <p className="strong">콜라보레이션</p>
          <img src="images/1.jpeg" alt="collabo" />
        </li>
        <li>
          <p className="strong">지속 가능성</p>
          <img src="images/4.png" alt="sustain" />
        </li>
        <li className={`${horizontalPos > 245 * 3 ? '' : 'hide'}`}>
          <p className="strong">브랜드 헤리티지</p>
          <img src="images/visionImg.jpg" alt="heritage" />
        </li>
      </ul>
      <div
        className="horizontalScrollBar"
        style={{
          transform: `translateX(${horizontalScrollPos}px)`,
        }}
      />
    </section>
  );
}
