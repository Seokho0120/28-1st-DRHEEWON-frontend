const ProductPrice = ({ totalPrice, productData, setProductData }) => {
  // 구매하기 버튼
  const buyProduct = () => {
    // 체크 되지 않은 제품 필터링
    const CheckedItems = productData.filter(item => item.isChecked);
    if (!CheckedItems.length) return alert('선택된 상품이 없습니다.');
    else {
      CheckedItems.map(item => item.id);
      // const idArray = CheckedItems.map(item => item.id);
      // console.log(idArray);
    }

    // fetch('https://062c-211-106-114-186.ngrok.io/carts', {
    //   method: 'POST',
    //   body: {
    //     user_id: idArray,
    //   },
    // })
    //   .then(res => res.json())
    //   .then(data => setProductData(data));
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
