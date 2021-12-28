import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Register.scss';

const validEmail = /^([a-z0-9_\\.-]+)@([\da-z\\.-]+)\.([a-z\\.]{2,6})$/;
const validPassWord = /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

const Register = () => {
  const [checkEmail, setCheckEmail] = useState('');
  const [checkPw, setCheckPw] = useState('');
  const [doubleCheckPw, setDoubleCheckPw] = useState('');

  const stateValueList = e => {
    const { value, name } = e.target;
    switch (name) {
      case 'email':
        setCheckEmail(value);
        break;
      case 'password':
        setCheckPw(value);
        break;
      case 'dPassword':
        setDoubleCheckPw(value);
        break;
      default:
    }
  };

  const validValues = () => {
    // 이메일이 아닐때
    if (!validEmail.test(checkEmail)) alert('이메일이 올바르지 않습니다.');
    // 비밀번호가 특수문자 1개, 숫자 1개, 8자 이상이 아닐때
    if (!validPassWord.test(checkPw)) alert('비밀번호가 올바르지 않습니다.');
    // 입력한 비밀번호가 같지 않을때
    if (!(checkPw === doubleCheckPw))
      alert('입력하신 비밀번호가 동일하지 않습니다.');
    // 값이 하나도 없을때
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
                    <input type="text" placeholder="이름을 입력해주세요" />
                  </td>
                </tr>
                <tr>
                  <th>아이디</th>
                  <td>
                    <input type="text" placeholder="아이디를 입력해주세요" />
                  </td>
                  <td>
                    <button type="button">중복 확인</button>
                  </td>
                </tr>
                <tr>
                  <th>이메일</th>
                  <td>
                    <input
                      onChange={stateValueList}
                      name="email"
                      type="email"
                      placeholder="ex) drheewon@dr.com"
                    />
                  </td>
                </tr>
                <tr>
                  <th>비밀번호</th>
                  <td>
                    <input
                      onChange={stateValueList}
                      name="password"
                      type="password"
                      placeholder="특수 문자와 숫자를 포함한 8자 이상"
                    />
                  </td>
                </tr>
                <tr>
                  <th>비밀번호 확인</th>
                  <td>
                    <input
                      onChange={stateValueList}
                      name="dPassword"
                      type="password"
                      placeholder="비밀번호를 한번 더 입력해주세요"
                    />
                  </td>
                </tr>
                <tr>
                  <th>생년월일</th>
                  <td>
                    <input type="date" />
                  </td>
                </tr>
                <tr>
                  <th>휴대폰</th>
                  <td>
                    <input type="number" placeholder="숫자만 입력해주세요" />
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={validValues}
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
