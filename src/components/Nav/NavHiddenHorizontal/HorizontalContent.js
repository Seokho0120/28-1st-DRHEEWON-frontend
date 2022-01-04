import React, { useState, useEffect, useRef } from 'react';

import './HorizontalContent.scss';

export default function HorizontalContent() {
  const [horizontalPos, setHorizontalPos] = useState(0);
  const [horizontalScrollPos, setHorizontalScrollPos] = useState(0);

  const horizontalRef = useRef();

  useEffect(() => {
    const horizontalVariable = horizontalRef.current;

    function handleHorizontal(event) {
      const childrenOffset = horizontalVariable.childNodes[0].offsetWidth;
      const childrenLength = horizontalVariable.children.length;
      const targetWidth = childrenOffset * childrenLength;
      const scrollRange = childrenOffset * 2 - 180;

      const moveRight = () => {
        setHorizontalPos(current => {
          return current + childrenOffset < targetWidth - childrenOffset * 1.3
            ? current + childrenOffset
            : targetWidth - childrenOffset * 1.3;
        });

        setHorizontalScrollPos(current => {
          return current + scrollRange / childrenLength < scrollRange
            ? current + scrollRange / childrenLength
            : scrollRange;
        });
      };

      const moveLeft = () => {
        setHorizontalPos(current => {
          return current - childrenOffset > 0 ? current - childrenOffset : 0;
        });
        setHorizontalScrollPos(current => {
          return current - scrollRange / childrenLength > 0
            ? current - scrollRange / childrenLength
            : 0;
        });
      };

      event.deltaY > 0 ? moveRight() : moveLeft();
    }

    horizontalVariable.addEventListener('mousewheel', handleHorizontal);

    return () => {
      horizontalVariable.removeEventListener('mousewheel', handleHorizontal);
    };
  }, []);

  return (
    <section className="horizontalContent">
      <ul
        style={{ transform: `translateX(-${horizontalPos}px)` }}
        ref={horizontalRef}
      >
        <li className={`${horizontalPos > 245 * 2 ? 'hide' : ''}`}>
          <p className="strong">공식몰 혜택</p>
          <img src="images/1.jpg" alt="benefit" />
        </li>
        <li>
          <p className="strong">콜라보레이션</p>
          <img src="images/1.jpg" alt="collabo" />
        </li>
        <li>
          <p className="strong">지속 가능성</p>
          <img src="images/1.jpg" alt="sustain" />
        </li>
        <li className={`${horizontalPos > 245 * 3 ? '' : 'hide'}`}>
          <p className="strong">브랜드 헤리티지</p>
          <img src="images/1.jpg" alt="heritage" />
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
