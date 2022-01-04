import React, { useState, useEffect, useRef } from 'react';

import VerticalItems from './VerticalItems';
import { verticalListMockData } from '../NavMockData';

import './VerticalContent.scss';

const verticalListObject = verticalListMockData;

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
      const scrollEach = targetHeight / (childrenLength - 6);

      const moveUp = () => {
        setVerticalPos(current => {
          return current - scrollEach > 0 ? current - scrollEach : 0;
        });
        setVerticalScrollPos(current => {
          return current - scrollEach > 0 ? current - scrollEach : 0;
        });
      };

      const moveDown = () => {
        setVerticalPos(current => {
          return current + scrollEach <= targetHeight
            ? current + scrollEach
            : targetHeight;
        });
        setVerticalScrollPos(current => {
          return current + scrollEach <= scrollRange
            ? current + scrollEach
            : scrollRange;
        });
      };

      event.deltaY > 0 && childrenLength > 6 ? moveDown() : moveUp();
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
        {verticalListObject.map((item, index) => (
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
