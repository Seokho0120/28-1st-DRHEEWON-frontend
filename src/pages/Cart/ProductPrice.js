import config from './../../config/config.json';

const ProductPrice = ({ totalPrice, productData, setProductData }) => {
  // 구매하기 버튼
  const buyProduct = () => {
    // 체크 되지 않은 제품 필터링
    const CheckedItems = productData.filter(item => item.isChecked);
    if (!CheckedItems.length) return alert('선택된 상품이 없습니다.');
    else {
      const idArray = CheckedItems.map(item => item.cartId);
      const userToken = localStorage.getToken('user');

      const { BASE_URL } = config;
      fetch(`${BASE_URL}orders?cartId=${idArray}`, {
        method: 'POST',
        headers: {
          Authorization: userToken,
        },
        body: JSON.stringify({ cartId: idArray }),
      })
        .then(res => res.json())
        .then(data => {
          fetch(`${BASE_URL}carts`, {
            headers: {
              Authorization: userToken,
            },
          })
            .then(res => res.json())
            .then(data => {
              setProductData(data.result);
            });
        });
    }
  };

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
