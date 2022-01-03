import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClipboard,
  faSearch,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import './NavHiddenMenu.scss';
import useScrollHidden from '../../hooks/useScrollHidden';
import { useEffect, useState } from 'react';

export default function NavHiddenMenu({ isShow, toggleHiddenMenu }) {
  useScrollHidden();

  const [delayRender, setDelayRender] = useState(false);

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

      <div className="menuContent" />
    </section>
  );
}
