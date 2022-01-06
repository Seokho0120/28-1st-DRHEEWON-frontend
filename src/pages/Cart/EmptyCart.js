import { Link } from 'react-router-dom';

import './EmptyCart.scss';

const EmptyCart = () => {
  return (
    <li className="emptyCartContainer">
      <h2 className="emptyText">장바구니가 비어있습니다.</h2>
      <button className="goToMain">
        <Link to="/">쇼핑 계속하기</Link>
      </button>
    </li>
  );
};

export default EmptyCart;
