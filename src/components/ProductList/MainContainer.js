import React, { useEffect, useState } from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MainContainer(props) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/ItemData.json')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setProduct(data);
      });
  }, []);

  return (
    <section className="mainContainer">
      <article className="mainContainerWrapper">
        <ul className="mainContainerWrapper">
          {product.map(item => {
            return (
              <li className="item" key={item.id}>
                <div className="itemImage">
                  <img src="#" alt="더미이미지" />
                </div>
                <div className="itemRow">
                  <div className="itemColumnLeft">
                    <h2 className="title">{item.productName}</h2>
                    <div className="additionalInfo">
                      <p>
                        <span>{item.centerColor}</span>
                      </p>
                    </div>
                    <button className="likesButton">
                      <div className="heartIcon">
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                      <span>99999</span>
                    </button>
                  </div>
                  <div className="itemColumnRight">
                    <div className="priceWrapper">
                      <span>{item.price}</span>
                    </div>
                    <button className="cartButton">
                      <span className="cartButtonText">장바구니 담기</span>
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
          ;
        </ul>
      </article>
    </section>
  );
}
