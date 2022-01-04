import { useState } from 'react';
import { Link } from 'react-router-dom';

import ContentHeader from './../../components/RegisterLogin/ContentHeader';
import Welcome from './../../components/RegisterLogin/Welcome';

import './../../components/RegisterLogin/RegisterLogin.scss';
import './Login.scss';

const validPassword = /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

const Login = () => {
  const [formInput, setFormInput] = useState({
    id: '',
    pw: '',
  });
  const isValidLogin = formInput.id && validPassword.test(formInput.pw);

  const handleLoginInput = e => {
    const { value, name } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  return (
    <div className="registerContainer LoginContainer">
      <ContentHeader pageInfo="로그인" />
      <main className="RegisterMainWrap">
        <Welcome />
        <article className="registerWrap">
          <form action="POST">
            <h3 className="loginTitle">로그인</h3>
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
              disabled={!isValidLogin}
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
