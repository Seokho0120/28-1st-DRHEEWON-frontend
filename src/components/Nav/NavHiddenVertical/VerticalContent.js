import React, { useState, useEffect, useRef } from 'react';

import VerticalItems from './VerticalItems';
import { verticalListMockData } from '../NavMockData';

import './VerticalContent.scss';
export default function VerticalContent() {
  const [verticalPos, setVerticalPos] = useState(0);
  const [verticalScrollPos, setVerticalScrollPos] = useState(0);
  const verticalRef = useRef();

  useEffect(() => {
    const verticalVariable = verticalRef.current;

    function handleVertical(event) {
      const childrenLength = verticalVariable.children.length;

      const targetHeight =
        Array.from(verticalVariable.childNodes)
          .map(item => item.offsetHeight)
          .reduce((accum, item) => accum + item) - 300;
      const scrollRange = 300;
      const scrollEach = Math.abs(targetHeight / (childrenLength - 6));

      const moveUp = () => {
        setVerticalPos(current => {
          const scrollUp = current - scrollEach;
          return scrollUp > 0 ? scrollUp : 0;
        });
        setVerticalScrollPos(current => {
          const scrollUp = current - scrollEach;
          return scrollUp > 0 ? scrollUp : 0;
        });
      };

      const moveDown = () => {
        setVerticalPos(current => {
          return current + scrollEach <= targetHeight
            ? current + scrollEach
            : targetHeight;
        });
        setVerticalScrollPos(current => {
          return current + scrollEach < scrollRange
            ? current + scrollEach
            : scrollRange;
        });
      };

      targetHeight >= 120 && (event.deltaY > 0 ? moveDown() : moveUp());
    }
    verticalVariable.addEventListener('mousewheel', handleVertical);

    return () => {
      verticalVariable.removeEventListener('mousewheel', handleVertical);
    };
  }, []);

  return (
    <section className="verticalContent">
      <ul
        style={{ transform: `translateY(-${verticalPos}px)` }}
        ref={verticalRef}
      >
        {verticalListMockData.map((item, index) => (
          <VerticalItems key={index} item={item} index={index} />
        ))}
      </ul>
      <div
        className="verticalScrollBar"
        style={{
          transform: `translateY(${verticalScrollPos}px)`,
        }}
      />
    </section>
  );
}
