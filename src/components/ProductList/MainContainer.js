import { useEffect, useState } from 'react';
import config from '../../config/config.json';
export default function MainContainer({ locationSearch }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${config.BASE_URL}products${locationSearch}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.result);
      });
  }, [locationSearch]);

  return (
    <section className="mainContainer">
      <article className="mainContainerWrapper">
        <ul className="mainContainerWrapper">
          {products.map(item => {
            return (
              <li className="item" key={item.id}>
                <div className="itemImage">
                  <img src={item.thumbnailImage} alt="이미지" />
                </div>
                <div className="itemRow">
                  <div className="itemColumnLeft">
                    <h2 className="title">{item.productName}</h2>
                    <div className="additionalInfo">{item.centerColor}</div>
                  </div>
                  <div className="itemColumnRight">
                    <div className="priceWrapper">₩{item.price}</div>
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
