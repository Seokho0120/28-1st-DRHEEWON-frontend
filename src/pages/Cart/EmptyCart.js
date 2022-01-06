import { Link } from 'react-router-dom';

import ContentHeader from './../../components/RegisterLogin/ContentHeader';
import './EmptyCart.scss';

const EmptyCart = () => {
  return (
    <main className="emptyCartContainer">
      <ContentHeader pageInfo="장바구니" />
      <h2 className="emptyText">장바구니가 비어있습니다.</h2>
      <button className="goToMain">
        <Link to="/">쇼핑 계속하기</Link>
      </button>
    </main>
  );
};

export default EmptyCart;
