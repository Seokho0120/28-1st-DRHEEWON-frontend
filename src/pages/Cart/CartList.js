import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const CartList = ({
  product,
  productData,
  setProductData,
  setIsCheckedAll,
}) => {
  const { id, thumbnailImage, productName, centeColor, size, price, quantity } =
    product;

  // 상품 직접 클릭하여 삭제 (delete btn)
  const deleteProduct = e => {
    // const { name } = e.target;
    // fetch('https://062c-211-106-114-186.ngrok.io/carts', {
    //   method: 'POST',
    //   headers: {
    //     Authorization:
    //       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzQsImV4cCI6MTY0MTUyMDI0NH0.2qLf-fKTaAl3ZvhbiEODeyEVKTkdIj7dQnnfrY4_jG4',
    //   },
    //   body: {
    //     user_id: name,
    //   },
    // })
    //   .then(res => res.json())
    //   .then(data => setProductData(data.result));
  };

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
        <button onClick={deleteProduct} name={id} className="deleteProduct">
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
            <button>
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <button>
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
        </section>
      </div>
    </li>
  );
};

export default CartList;
