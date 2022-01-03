import { BorderButton } from '../../components/Buttons/BorderButton';

export default function MainNewJoin() {
  return (
    <section className="newJoinWrapper">
      <div className="newJoinContainer">
        <div className="newJoinText">
          <span className="strong">신규가입 혜택</span>

          <span>신규 회원으로 가입하고 10% 쿠폰과 최신 소식을 받아보세요.</span>
        </div>
        <a href="#!">
          <BorderButton type="join" />
        </a>
      </div>
    </section>
  );
}
