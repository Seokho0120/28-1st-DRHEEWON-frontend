import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEye, faUser } from '@fortawesome/free-regular-svg-icons';

import './Nav.scss';
import NavHiddenMenu from './NavHiddenMenu';

export default function Nav({ visibleValue }) {
  const [isShow, setIsShow] = useState(false);
  const isValidUser = localStorage.getItem('token');

  const navigate = useNavigate();

  const toggleHiddenMenu = () => {
    setIsShow(!isShow);
  };

  const logout = () => {
    localStorage.removeItem('token');
    alert('로그아웃 되었습니다!');
    navigate('/');
  };

  return (
    <>
      <header className={`navHead ${visibleValue ? '' : 'hide'}`}>
        <section className={`navUpper ${visibleValue ? '' : 'hide'}`}>
          <div className="navUpperFixedWidth">
            <div className="navUpperBtns">
              {isValidUser === null ? (
                <>
                  <a href="/login">로그인</a>
                  <a href="/register" className="strong">
                    회원가입
                  </a>
                </>
              ) : (
                <>
                  <span>
                    <span className="strong">{isValidUser.name}</span>님
                    환영합니다!
                  </span>
                  <span onClick={logout}>로그아웃</span>
                </>
              )}

              <a href="#!">매장찾기</a>
              <a href="#!">브랜드헤리티지</a>
              <a href="#!">고객센터</a>
            </div>
          </div>
        </section>
        <section className={`navBottom ${visibleValue ? '' : 'hide'}`}>
          <div className="navBottomFixedWidth">
            <button
              type="button"
              className="navHamburgerBtn"
              onClick={toggleHiddenMenu}
            >
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
      {isShow ? (
        <NavHiddenMenu isShow={isShow} toggleHiddenMenu={toggleHiddenMenu} />
      ) : (
        ''
      )}
    </>
  );
}
