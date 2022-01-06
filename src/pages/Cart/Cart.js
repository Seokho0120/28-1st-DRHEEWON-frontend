import { useEffect, useState } from 'react';

import ContentHeader from './../../components/RegisterLogin/ContentHeader';
import CartList from './CartList';
import ProductPrice from './ProductPrice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Cart.scss';

const Cart = () => {
  const [productData, setProductData] = useState([]);
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const totalPrice = productData
    .filter(item => item.isChecked)
    .reduce((acc, cur) => {
      return acc + cur.price * cur.quantity;
    }, 0);

  useEffect(() => {
    // fetch('https://062c-211-106-114-186.ngrok.io/carts', {
    //   method: 'POST',
    //   headers: {
    //     Authorization:
    //       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzQsImV4cCI6MTY0MTUyMDI0NH0.2qLf-fKTaAl3ZvhbiEODeyEVKTkdIj7dQnnfrY4_jG4',
    //   },
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     // setProductData(data);
    //     console.log(data);
    //   });
  }, []);

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
    // const checkedDeleteItem = productData.filter(item => item.isChecked);
    // const countDeleteItemId = checkedDeleteItem.map(item => item.id);
    // fetch('https://062c-211-106-114-186.ngrok.io/carts', {
    //   method: 'POST',
    //   headers: {
    //     Authorization:
    //       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzQsImV4cCI6MTY0MTUyMDI0NH0.2qLf-fKTaAl3ZvhbiEODeyEVKTkdIj7dQnnfrY4_jG4',
    //   },
    //   body: {
    //     user_id: countDeleteItemId,
    //   },
    // })
    //   .then(res => res.json())
    //   .then(data => setProductData(data));
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
            <button type="button">
              <FontAwesomeIcon
                icon={faTrashAlt}
                size="2x"
                className="trashAlt"
              />
              <span onClick={deleteProductSelection}>선택 삭제 ({1})</span>
            </button>
          </div>
        </section>
        <div className="cartPriceListWrap">
          <ul className="cartListWrap">
            {productData.map(product => (
              <CartList
                key={product.id}
                product={product}
                productData={productData}
                setProductData={setProductData}
                setIsCheckedAll={setIsCheckedAll}
              />
            ))}
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
