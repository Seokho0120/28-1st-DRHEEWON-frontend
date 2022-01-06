// import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const CartList = ({ product }) => {
  const { thumbnailImage, productName, centeColor, size, price, quantity } =
    product;

  // 제품 수량 추가 및 삭제
  const handlerQuantity = () => {};

  // 상품 직접 클릭하여 삭제 (delete btn)
  const deleteProduct = () => {};

  return (
    <li>
      <div className="productContent">
        <input type="checkbox" />
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
