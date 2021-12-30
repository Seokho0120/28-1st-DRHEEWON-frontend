import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Register.scss';

const validEmail = /^([a-z0-9_\\.-]+)@([\da-z\\.-]+)\.([a-z\\.]{2,6})$/;
const validPassword = /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

const Register = () => {
  const [formInput, setFormInput] = useState({});

  const handleLoginInput = e => {
    const { value, name } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const checkFormValid = () => {
    // 버튼을 클릭하면 무엇을?
    // 유효성 검사: 이메일, 비밀번호, 비밀번호 확인
    // 만약 이메일 형식이 아니야? => alert('이메일이 올바르지 않습니다.')
    // 만약 비밀번호 형식이 틀려? => alert('비밀번호가 올바르지 않습니다.')
    // 만약 비밀번호와 비밀번호 확인의 value값이 달라? => alert('비밀번호가 동일하지 않습니다.')
    // 그러나 2개 이상이 틀려? => 첫번째 value의 key값만 말해서 alert창은 1개만 띄워

    // 값이 없을때: value 값이 존재하지 않음
    // => 어떤 값이 비어있을때: `${가장 최상단에 위치한 값}이 입력되지 않았습니다.`

    const validator = {
      email: validEmail.test(formInput.email),
      password: validPassword.test(formInput.password),
      rePassword: formInput.rePassword === formInput.password,
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
      email: '이메일이 올바르지 않습니다.',
      password: '비밀번호가 올바르지 않습니다.',
      rePassword: '비밀번호가 동일하지 않습니다.',
    };

    findKey() === null ? alert('성공') : alert(alertMessage[findKey()]);
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
                    <input type="date" required="required" />
                  </td>
                </tr>
                <tr>
                  <th>휴대폰</th>
                  <td>
                    <input
                      type="number"
                      placeholder="숫자만 입력해주세요"
                      required="required"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={checkFormValid}
              // disabled={isFormValidAll === true or false}
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
