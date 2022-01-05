// 구매하기 버튼
const buyProduct = () => {};

const ProductPrice = ({ totalPrice }) => {
  return (
    <aside className="orderPrice">
      <article>
        <header>
          <h3>주문 예정 금액</h3>
        </header>
        <dl>
          <dt>총 상품 금액</dt>
          <dd>{totalPrice.toLocaleString()}</dd>
          <dt>할인 금액</dt>
          <dd>(-)0</dd>
          <dt>총 결제 예정 금액</dt>
          <dd>{totalPrice.toLocaleString()}</dd>
        </dl>
      </article>
      <button onClick={buyProduct} className="buyProductBtn">
        구매하기
      </button>
    </aside>
  );
};

export default ProductPrice;
