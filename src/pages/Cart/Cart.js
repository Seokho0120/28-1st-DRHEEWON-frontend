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
  // console.log(productData);

  useEffect(() => {
    console.log(productData);
  }, [productData]);

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
          <ProductPrice totalPrice={totalPrice} />
        </div>
      </main>
    </div>
  );
};

export default Cart;
