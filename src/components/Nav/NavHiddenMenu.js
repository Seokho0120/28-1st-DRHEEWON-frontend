import { useEffect, useState } from 'react';
import useScrollHidden from '../../hooks/useScrollHidden';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClipboard,
  faSearch,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import VerticalContent from './NavHiddenVertical/VerticalContent';

import './NavHiddenMenu.scss';
import HorizontalContent from './NavHiddenHorizontal/HorizontalContent';

export default function NavHiddenMenu({ isShow, toggleHiddenMenu }) {
  const [delayRender, setDelayRender] = useState(false);

  useScrollHidden();

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
          <VerticalContent />
          <HorizontalContent />
        </div>
      </div>
    </section>
  );
}
