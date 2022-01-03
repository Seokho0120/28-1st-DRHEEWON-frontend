import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footerWrapper">
        <div className="footerMain">
          <div className="footerLeft">
            <h3>닥터희원위코드코리아(주)</h3>
            <p>
              서울특별시 강남구 테헤란로 위워크 10층 닥터희원
              <span className="marginVerticalBar">|</span> 사업자번호 :
              999-99-99999
            </p>
            <p>
              개인정보관리책임자 : 닥터희원
              <span className="marginVerticalBar">|</span>대표이사 : 강희원
            </p>
            <p>
              <span className="footerWhite strong">문의전화: 1234-5678</span>
              <span>
                (10AM ~ 7PM 점심시간 12:00~14:00)
                <span className="marginVerticalBar">|</span>이메일 :
                hello@drheewon.co.kr
              </span>
            </p>
            <p>
              팩스 : 02-123-4567<span className="marginVerticalBar">|</span>
              호스팅 제공 : (주)닥터희원
            </p>
            <p>
              All Images and Contents Copyright by 2021 Dr. Heewon. All Right
              Reserved
            </p>
          </div>
          <div className="footerHelp">
            <h3>고객센터</h3>
            <p>챗봇 상담</p>
            <p>1:1 문의</p>
            <p>자주 묻는 질문</p>
            <p>공지사항</p>
          </div>
          <div className="footerAbout">
            <h3>닥터희원에 대하여</h3>
            <p>브랜드 헤리티지</p>
            <p>이벤트</p>
            <p>SUSTAINBILITY</p>
            <p>MODERN SLAVERY ACT</p>
            <p>SOCIAL REPONSIBILITY</p>
            <p>사이즈 가이드</p>
          </div>
        </div>
        <section className="footerBottom">
          <div className="footerATags">
            <a href="#!">이용약관</a>
            <a href="#!">개인정보취급방침</a>
            <a href="#!">매장찾기</a>
            <a href="#!">CONTACT</a>
            <a href="#!">사이트 맵</a>
          </div>
          <div className="socialIcons">
            <div>
              <a href="#!">
                <FontAwesomeIcon className="socialIconsBtn" icon={faTwitter} />
              </a>
            </div>
            <div>
              <a href="#!">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>

            <div>
              <a href="#!">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
            <div>
              <a href="#!">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </section>
      </section>
    </footer>
  );
}
