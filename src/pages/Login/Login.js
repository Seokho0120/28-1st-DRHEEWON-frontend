import { useState } from 'react';
import { Link } from 'react-router-dom';

import ContentHeader from './../../components/RegisterLogin/ContentHeader';
import Welcome from './../../components/RegisterLogin/Welcome';
import './Login.scss';

const validPassword =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

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

  const goToMain = () => {
    fetch('http://24d4-221-151-120-163.ngrok.io/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        user_id: formInput.id,
        password: formInput.pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        // if (result.message === 'SUCCESS') {
        //   alert(`${id}님 반갑습니다!`);
        //   localStorage.setItem('user', result.token);
        //   navigate('/Main-won');
        // }
        // if (result.message === 'USER_DOES_NOT_EXIST') {
        //   alert('아이디가 틀렸거나 존재하지 않는 회원입니다.');
        // }
        // if (result.message === 'PASSWORD_ERROR') {
        //   alert('비밀번호가 틀렸어요.');
        // }
      });
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
              onClick={goToMain}
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
