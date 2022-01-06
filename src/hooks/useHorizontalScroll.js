import { useState, useEffect } from 'react';

export default function useHorizontalScroll(horizontalRef) {
  const [horizontalPos, setHorizontalPos] = useState(0);
  const [horizontalScrollPos, setHorizontalScrollPos] = useState(0);

  useEffect(() => {
    const horizontalVariable = horizontalRef.current;

    function handleHorizontal(event) {
      const childrenOffset = horizontalVariable.childNodes[0].offsetWidth;
      const childrenLength = horizontalVariable.children.length;
      const targetWidth = childrenOffset * childrenLength;
      const scrollRange = childrenOffset * 2 - 180;

      const moveRight = () => {
        setHorizontalPos(current => {
          const scrollRight = current + childrenOffset;

          return scrollRight < targetWidth - childrenOffset * 1.3
            ? scrollRight
            : targetWidth - childrenOffset * 1.3;
        });

        setHorizontalScrollPos(current => {
          const scrollRight = current + scrollRange / childrenLength;

          return scrollRight < scrollRange ? scrollRight : scrollRange;
        });
      };

      const moveLeft = () => {
        setHorizontalPos(current => {
          const scrollLeft = current - childrenOffset;

          return scrollLeft > 0 ? current - childrenOffset : 0;
        });
        setHorizontalScrollPos(current => {
          const scrollLeft = current - scrollRange / childrenLength;

          return scrollLeft > 0 ? scrollLeft : 0;
        });
      };

      event.deltaY > 0 ? moveRight() : moveLeft();
    }

    horizontalVariable.addEventListener('mousewheel', handleHorizontal);

    return () => {
      horizontalVariable.removeEventListener('mousewheel', handleHorizontal);
    };
  }, [horizontalRef]);

  return { horizontalPos, horizontalScrollPos };
}
