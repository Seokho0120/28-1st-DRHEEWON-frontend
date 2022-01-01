import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Login.scss';

const validPassword = /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

const Login = () => {
  const [formInput, setFormInput] = useState({
    id: '',
    pw: '',
  });
  const isValidLogin = !(formInput.id && validPassword.test(formInput.pw));

  const handleLoginInput = e => {
    const { value, name } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  return (
    <div className="registerContainer">
      <header className="infoPage">
        <span>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" className="backArrow" />
        </span>
        <h1>로그인</h1>
      </header>
      <main className="RegisterMainWrap">
        <header className="welcomeWrap">
          <h2>어서오세요</h2>
          <p>닥터마틴에 오신걸 환영합니다</p>
        </header>
        <article className="registerWrap">
          <form action="POST">
            <h3>로그인</h3>
            <label className="inputWrap">
              <span>아이디</span>
              <input
                name="id"
                onChange={handleLoginInput}
                value={formInput.id}
                type="text"
              />
            </label>
            <label className="inputWrap">
              <span>비밀번호</span>
              <input
                name="pw"
                onChange={handleLoginInput}
                value={formInput.pw}
                type="password"
              />
            </label>
            <button
              disabled={isValidLogin}
              className="submitRegister"
              type="button"
            >
              로그인
            </button>
            <button className="goRegister" type="button">
              <Link to="/register">회원가입</Link>
            </button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default Login;
