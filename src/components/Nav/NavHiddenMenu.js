import { useEffect, useState, useRef } from 'react';
import useScrollHidden from '../../hooks/useScrollHidden';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClipboard,
  faSearch,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import NavHiddenVertical from './NavHiddenVertical';

import './NavHiddenMenu.scss';
import { verticalListMockData } from './NavMockData';

const verticalListObject = verticalListMockData;

export default function NavHiddenMenu({ isShow, toggleHiddenMenu }) {
  const [delayRender, setDelayRender] = useState(false);
  const [verticalPos, setVerticalPos] = useState(0);
  const [horizontalPos, setHorizontalPos] = useState(0);
  const [horizontalScrollPos, setHorizontalScrollPos] = useState(0);
  const [verticalScrollPos, setVerticalScrollPos] = useState(0);

  const verticalRef = useRef();
  const horizontalRef = useRef();

  useScrollHidden();

  useEffect(() => {
    const verticalVariable = verticalRef.current;
    const horizontalVariable = horizontalRef.current;

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

    verticalVariable.addEventListener('mousewheel', handleVertical);
    horizontalVariable.addEventListener('mousewheel', handleHorizontal);

    return () => {
      verticalVariable.removeEventListener('mousewheel', handleVertical);
      horizontalVariable.removeEventListener('mousewheel', handleHorizontal);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setDelayRender(true);
    }, 10);
  }, [isShow]);

  return (
    <section className={`hiddenMenu ${delayRender ? 'active' : ''}`}>
      <div className="menuHeaderWrapper">
        <div className="menuHeader">
          <a href="#!">
            <FontAwesomeIcon className="fontAwesomeIcon" icon={faClipboard} />
          </a>

          <button onClick={toggleHiddenMenu}>
            <FontAwesomeIcon className="fontAwesomeIcon" icon={faTimes} />
          </button>
        </div>
      </div>
      <div className="menuInputWrapper">
        <div className="menuInput">
          <input placeholder="검색어를 입력해주세요." />
          <button>
            <FontAwesomeIcon
              className="fontAwesomeIcon white"
              icon={faSearch}
            />
          </button>
        </div>
      </div>

      <div className="menuContentWrapper">
        <div className="menuContent">
          <section className="verticalContent">
            <ul
              style={{ transform: `translateY(-${verticalPos}px)` }}
              ref={verticalRef}
            >
              {verticalListObject.map((item, index) => (
                <NavHiddenVertical
                  key={index}
                  item={item}
                  index={index}
                  verticalPos={verticalPos}
                />
              ))}
            </ul>
            <div
              className="verticalScrollBar"
              style={{
                transform: `translateY(${verticalScrollPos}px)`,
              }}
            />
          </section>
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
        </div>
      </div>
    </section>
  );
}
