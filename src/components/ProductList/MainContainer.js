import { useEffect, useState } from 'react';

export default function MainContainer() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/itemData.json')
      .then(res => res.json())
      .then(res => setProduct(res));
  }, []);

  return (
    <section className="mainContainer">
      <article className="mainContainerWrapper">
        <ul className="mainContainerWrapper">
          {product?.map(item => {
            return (
              <li className="item" key={item.id}>
                <div className="itemImage">
                  <img src="/img/dummyImg.jpg" alt="더미이미지" />
                </div>
                <div className="itemRow">
                  <div className="itemColumnLeft">
                    <h2 className="title">{item.productName}</h2>
                    <div className="additionalInfo">{item.centerColor}</div>
                  </div>
                  <div className="itemColumnRight">
                    <div className="priceWrapper">{item.price}</div>
                    <button className="cartButton">장바구니 담기</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}
