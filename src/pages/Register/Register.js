import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Register.scss';

const validEmail = /^([a-z0-9_\\.-]+)@([\da-z\\.-]+)\.([a-z\\.]{2,6})$/;
const validPassword = /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

const Register = () => {
  const [formInput, setFormInput] = useState({});
  const navigate = useNavigate();

  const handleLoginInput = e => {
    const { value, name } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const checkFormValid = () => {
    const { name, id, email, password, rePassword, birth, tel } = formInput;

    if (!Object.keys(formInput).length) return alert('내용을 입력해주세요.');

    const isKeyValid = input =>
      typeof input !== 'undefined' ? input.length : false;

    const validator = {
      name: isKeyValid(name),
      id: isKeyValid(id),
      email: validEmail.test(email),
      password: validPassword.test(password),
      rePassword: rePassword === password,
      birth: isKeyValid(birth),
      tel: isKeyValid(tel),
    };

    const findKey = () => {
      let keyValue;
      for (let key in validator) {
        keyValue = !validator[key] ? key : null;
        if (keyValue !== null) break;
      }
      return keyValue;
    };

    const alertMessage = {
      name: '이름이 입력되지 않았습니다.',
      id: '아이디가 입력되지 않았습니다.',
      email: '이메일이 올바르지 않습니다.',
      password: '비밀번호가 올바르지 않습니다.',
      rePassword: '비밀번호가 동일하지 않습니다.',
      birth: '생년월일이 입력되지 않았습니다.',
      tel: '휴대폰 번호가 입력되지 않았습니다.',
    };

    if (findKey() === null) {
      navigate('/login');
      alert('환영합니다. 로그인을 해주세요.');
    } else {
      alert(alertMessage[findKey()]);
    }
  };

  return (
    <div className="registerContainer">
      <header className="infoPage">
        <span>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" className="backArrow" />
        </span>
        <h1>회원가입</h1>
      </header>
      <main className="RegisterMainWrap">
        <header className="welcomeWrap">
          <h2>어서오세요</h2>
          <p>닥터마틴에 오신걸 환영합니다</p>
        </header>
        <article className="registerWrap">
          <form action="POST">
            <h3>회원가입</h3>
            <table>
              <tbody>
                <tr>
                  <th>이름</th>
                  <td>
                    <input
                      onChange={handleLoginInput}
                      name="name"
                      type="text"
                      placeholder="이름을 입력해주세요"
                      required="required"
                    />
                  </td>
                </tr>
                <tr>
                  <th>아이디</th>
                  <td>
                    <input
                      onChange={handleLoginInput}
                      name="id"
                      type="text"
                      placeholder="아이디를 입력해주세요"
                      required="required"
                    />
                  </td>
                  <td>
                    <button type="button">중복 확인</button>
                  </td>
                </tr>
                <tr>
                  <th>이메일</th>
                  <td>
                    <input
                      onChange={handleLoginInput}
                      name="email"
                      type="email"
                      placeholder="ex) drheewon@dr.com"
                      required="required"
                    />
                  </td>
                </tr>
                <tr>
                  <th>비밀번호</th>
                  <td>
                    <input
                      onChange={handleLoginInput}
                      name="password"
                      type="password"
                      placeholder="특수 문자와 숫자를 포함한 8자 이상"
                      required="required"
                    />
                  </td>
                </tr>
                <tr>
                  <th>비밀번호 확인</th>
                  <td>
                    <input
                      onChange={handleLoginInput}
                      name="rePassword"
                      type="password"
                      placeholder="비밀번호를 한번 더 입력해주세요"
                      required="required"
                    />
                  </td>
                </tr>
                <tr>
                  <th>생년월일</th>
                  <td>
                    <input
                      onChange={handleLoginInput}
                      name="birth"
                      type="date"
                      required="required"
                    />
                  </td>
                </tr>
                <tr>
                  <th>휴대폰</th>
                  <td>
                    <input
                      onChange={handleLoginInput}
                      name="tel"
                      type="tel"
                      placeholder="숫자만 입력해주세요"
                      required="required"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={checkFormValid}
              type="button"
              className="submitRegister"
            >
              가입하기
            </button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default Register;
