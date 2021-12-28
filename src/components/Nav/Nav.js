import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEye, faUser } from '@fortawesome/free-regular-svg-icons';

import './Nav.scss';

export default function Nav() {
  return (
    <header className="navHead">
      <section className="navUpper">
        <div className="navUpperFixedWidth">
          <nav>
            <a href="#!">로그인</a>
            <a href="#!" className="strong">
              회원가입
            </a>
            <a href="#!">매장찾기</a>
            <a href="#!">브랜드헤리티지</a>
            <a href="#!">고객센터</a>
          </nav>
        </div>
      </section>
      <section className="navBottom">
        <div className="navBottomFixedWidth">
          <button type="button" className="navHamburgerBtn">
            <span className="hamburgerBtnLine" />
          </button>
          <div className="navLogo">
            <a href="/">
              <img src="/images/drheewon_logo.png" alt="닥터희원 로고" />
            </a>
          </div>
          <div className="beautifulMargin" />
          <div className="navInput">
            <div className="inputWrapper">
              <input placeholder="검색어를 입력해주세요" />
              <FontAwesomeIcon className="fontAwesomeIcon" icon={faSearch} />
            </div>
          </div>
          <FontAwesomeIcon className="fontAwesomeIcon" icon={faHeart} />
          <FontAwesomeIcon className="fontAwesomeIcon" icon={faShoppingBag} />
          <FontAwesomeIcon className="fontAwesomeIcon" icon={faEye} />
          <FontAwesomeIcon className="fontAwesomeIcon" icon={faUser} />
        </div>
      </section>
    </header>
  );
}
