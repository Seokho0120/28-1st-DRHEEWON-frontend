// import { useState } from 'react';
// import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const CartList = ({
  product,
  productData,
  setProductData,
  setIsCheckedAll,
}) => {
  const { id, thumbnailImage, productName, centeColor, size, price, quantity } =
    product;
  const [isCheckedItem, setIsCheckedItem] = useState(false);

  // 제품 수량 증가 및 감소
  const handlerQuantity = () => {};

  // 상품 직접 클릭하여 삭제 (delete btn)
  const deleteProduct = () => {};

  // 상품 개별 선택
  const toggleCheckItem = e => {
    const { name } = e.target;
    setProductData(current => {
      const newList = [...current];
      newList.forEach((item, index) => {
        if (index + 1 === Number(name)) item.isChecked = !item.isChecked;
      });
      return newList;
    });
  };

  useEffect(() => {
    const isAllChecked =
      productData.length ===
      productData.reduce((acc, cur) => {
        return cur.isChecked ? acc + 1 : acc;
      }, 0);
    setIsCheckedAll(isAllChecked);
  }, [productData, setIsCheckedAll]);

  return (
    <li>
      <div className="productContent">
        <input
          name={id}
          type="checkbox"
          onChange={toggleCheckItem}
          checked={product.isChecked}
        />
        <button onClick={deleteProduct} className="deleteProduct">
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            className="delProductIcon"
          />
        </button>
        <section className="productImg">
          <img alt={productName} src={thumbnailImage} />
        </section>
        <section className="productInfo">
          <h4>{productName}</h4>
          <ul>
            <li>컬러: {centeColor}</li>
            <li>사이즈(mm): {size}</li>
          </ul>
          <em className="productPriceNum">{price.toLocaleString()}</em>
          <div className="countProduct">
            <span>수량</span>
            <em>{quantity}</em>
            <button onClick={handlerQuantity}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <button onClick={handlerQuantity}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
        </section>
      </div>
    </li>
  );
};

export default CartList;
