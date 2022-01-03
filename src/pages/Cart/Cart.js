// import { useState } from 'react';

import ContentHeader from '../../components/RegisterLogin/ContentHeader';

import './Cart.scss';
import './../../components/RegisterLogin/RegisterLogin.scss';

const Cart = () => {
  return (
    <div className="cartContainer">
      <ContentHeader pageInfo="장바구니" />
      <main>
        <section className="choiceHandler">choice section</section>
        <section className="cartListWrap">
          <ul>
            <li>product</li>
          </ul>
        </section>
        <section className="orderPrice">order price</section>
      </main>
    </div>
  );
};

export default Cart;
