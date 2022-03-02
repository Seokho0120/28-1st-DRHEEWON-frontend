import { useEffect, useState } from 'react';
import { userToken } from '../../customlib/getUserToken';
import { alertMessage } from '../FetchAlertMessage/FetchAlertMessage';

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

  const inputCart = event => {
    const { name } = event.target;
    if (userToken) {
      fetch(`${config.BASE_URL}carts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: userToken,
        },
        body: JSON.stringify({ productId: name, quantity: 1, size: '270' }),
      }).then(res => {
        alert(alertMessage[res.status]);
      });
    } else {
      alert('로그인부터 해주세요!');
    }
  };

  return (
    <section className="mainContainer">
      <article className="mainContainerWrapper">
        <ul className="mainContainerWrapper">
          {products.map(item => {
            return (
              <li className="item" key={item.id}>
                <div className="itemImage">
                  <a href={`/ProductDetail/${item.id}`}>
                    <img src={item.thumbnailImage} alt="이미지" />
                  </a>
                </div>
                <div className="itemRow">
                  <div className="itemColumnLeft">
                    <h2 className="title">{item.productName}</h2>
                    <div className="additionalInfo">{item.centerColor}</div>
                  </div>
                  <div className="itemColumnRight">
                    <div className="priceWrapper">₩{item.price}</div>
                    <button
                      name={item.id}
                      className="cartButton"
                      onClick={inputCart}
                    >
                      장바구니 담기
                    </button>
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
