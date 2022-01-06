import { useState, useEffect } from 'react';

export default function useVerticalScroll(verticalRef) {
  const [verticalPos, setVerticalPos] = useState(0);
  const [verticalScrollPos, setVerticalScrollPos] = useState(0);

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
      const canScroll = targetHeight >= 120;

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
          const scrollDown = current + scrollEach;

          return scrollDown <= targetHeight ? scrollDown : targetHeight;
        });

        setVerticalScrollPos(current => {
          const scrollDown = current + scrollEach;

          return scrollDown < scrollRange ? scrollDown : scrollRange;
        });
      };

      canScroll && (event.deltaY > 0 ? moveDown() : moveUp());
    }
    verticalVariable.addEventListener('mousewheel', handleVertical);

    return () => {
      verticalVariable.removeEventListener('mousewheel', handleVertical);
    };
  }, [verticalRef]);

  return { verticalPos, verticalScrollPos };
}
