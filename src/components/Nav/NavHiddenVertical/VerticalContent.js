import React, { useRef } from 'react';
import useVerticalScroll from '../../../hooks/useVerticalScroll';

import VerticalItems from './VerticalItems';
import { verticalListMockData } from '../NavMockData';

import './VerticalContent.scss';

export default function VerticalContent() {
  const verticalRef = useRef();

  const { verticalPos, verticalScrollPos } = useVerticalScroll(verticalRef);

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
