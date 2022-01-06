import { useEffect, useState } from 'react';

import config from './../../config/config.json';

import ContentHeader from './../../components/RegisterLogin/ContentHeader';
import CartList from './CartList';
import ProductPrice from './ProductPrice';
// import EmptyCart from './EmptyCart';

import './Cart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const [productData, setProductData] = useState([]);

  const [isFetched, setIsFetched] = useState(false);
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  useEffect(() => {
    // if (!localStorage.getToken('user')) {
    //   alert('회원가입을 해주세요.');
    //   // navigate('/register');
    // }

    const { BASE_URL } = config;
    fetch(`${BASE_URL}carts`, {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzQsImV4cCI6MTY0MTUyMDI0NH0.2qLf-fKTaAl3ZvhbiEODeyEVKTkdIj7dQnnfrY4_jG4',
      },
    })
      .then(res => res.json())
      .then(data => {
        data.result.forEach(item => (item.isChecked = false));
        setProductData(data.result);
      });
  }, [isFetched]);

  const totalPrice = productData
    .filter(item => item.isChecked)
    .reduce((acc, cur) => {
      return acc + cur.price * cur.quantity;
    }, 0);
  // const totalPrice = 0;

  // 전체 상품 선택
  const checkProductAll = e => {
    setProductData(current => {
      const newList = [...current];
      newList.forEach(item => {
        item.isChecked = !isCheckedAll;
        // isCheckedAll ? (item.isChecked = false) : (item.isChecked = true);
      });
      return newList;
    });
    setIsCheckedAll(!isCheckedAll);
  };

  // 선택 삭제
  const deleteProductSelection = () => {
    const checkedDeleteItem = productData.filter(item => item.isChecked);
    const countDeleteItemId = checkedDeleteItem.map(item => item.cartId);
    const { BASE_URL } = config;

    fetch(`${BASE_URL}carts?cartId=${countDeleteItemId}`, {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzQsImV4cCI6MTY0MTUyMDI0NH0.2qLf-fKTaAl3ZvhbiEODeyEVKTkdIj7dQnnfrY4_jG4',
      },
      body: JSON.stringify({ cartId: countDeleteItemId }),
    }).then(res => res.json());

    setIsFetched(!isFetched);
  };

  return (
    <div className="cartContainer">
      <ContentHeader pageInfo="장바구니" />
      <main>
        <section className="choiceHandlerWrap">
          <div className="choiceHandler">
            <label>
              <input
                onChange={checkProductAll}
                type="checkbox"
                checked={isCheckedAll}
              />
              <span>전체 선택</span>
            </label>
            <button onClick={deleteProductSelection} type="button">
              <FontAwesomeIcon
                icon={faTrashAlt}
                size="2x"
                className="trashAlt"
              />
              <span>선택 삭제</span>
            </button>
          </div>
        </section>
        <div className="cartPriceListWrap">
          <ul className="cartListWrap">
            {productData.length === 0 ? (
              <EmptyCart />
            ) : (
              productData.map(product => (
                <CartList
                  key={product.cartId}
                  product={product}
                  productData={productData}
                  setProductData={setProductData}
                  setIsCheckedAll={setIsCheckedAll}
                />
              ))
            )}
          </ul>
          <ProductPrice
            totalPrice={totalPrice}
            productData={productData}
            setProductData={setProductData}
          />
        </div>
      </main>
    </div>
  );
};

export default Cart;
