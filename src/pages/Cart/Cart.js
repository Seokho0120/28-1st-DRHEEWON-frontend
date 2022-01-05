import { useEffect, useState } from 'react';

import ContentHeader from './../../components/RegisterLogin/ContentHeader';
import CartList from './CartList';
import ProductPrice from './ProductPrice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Cart.scss';

const Cart = () => {
  const [productData, setProductData] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const productExist = productData.length;
  const isCheckedAll = checkedItems.length === productExist;

  const totalPrice = productData.filter(item => item.isChecked);
  // .reduce((acc, cur) => {
  //   return acc.price + cur.price * cur.quantity;
  // });
  console.log(totalPrice);

  // 전체 상품 선택
  const checkProductAll = () => {
    if (isCheckedAll) {
      setCheckedItems([]);
    } else {
      const allList = [];
      productData.forEach(item => {
        allList.push(item.id);
      });
      setCheckedItems(allList);
    }
  };

  // 선택 삭제
  const deleteProductSelection = () => {
    // fetch(url,{method:'post', body:{
    //   checkedItems:checkedItems
    // }})
    // .then(res=>res.json())
    // .then(data=>setProductData(data))
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/cartList/cartList.json')
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
  }, []);

  return (
    <div className="cartContainer">
      <ContentHeader pageInfo="장바구니" />
      <main>
        <section className="choiceHandlerWrap">
          <div className="choiceHandler">
            <label onClick={checkProductAll}>
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
              <span onClick={deleteProductSelection}>
                선택 삭제 ({checkedItems.length})
              </span>
            </button>
          </div>
        </section>
        <div className="cartPriceListWrap">
          <ul className="cartListWrap">
            {productData.map((product, idx) => (
              <CartList
                key={idx}
                product={product}
                checkedItems={checkedItems}
                setCheckedItems={setCheckedItems}
              />
            ))}
          </ul>
          <ProductPrice totalPrice={productData ? totalPrice : 0} />
        </div>
      </main>
    </div>
  );
};

export default Cart;
