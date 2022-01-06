import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SlideShow from './SlideShow/SlideShow';
import ProductContent from './ProductContent/ProductContent';
import ProductExplain from './ProductExplain/ProductExplain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faSquare,
  faPen,
  faMale,
  faFemale,
} from '@fortawesome/free-solid-svg-icons';
import './ProductDetail.scss';
import './SlideShow/SlideShow.scss';
import './ProductContent/ProductContent.scss';
import './ProductExplain/ProductExplain.scss';
import { faStar as whiteStar } from '@fortawesome/free-regular-svg-icons';

export default function ProductDetail() {
  const [slidePosition, setSlidePosition] = useState(0);
  const [detailData, setDetailData] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [prefer, setPrefer] = useState([]);
  const [remainLength, setRemainLength] = useState();
  const [comments, setComments] = useState([]);

  const validStar = [1, 2, 3, 4, 5];

  const { id } = useParams();

  const movePrev = () => {
    slidePosition > 0
      ? setSlidePosition(slidePosition - 1)
      : setSlidePosition(4);
  };

  const moveNext = () => {
    slidePosition < 4
      ? setSlidePosition(slidePosition + 1)
      : setSlidePosition(0);
  };

  const minusNumber = () => {
    quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);
  };

  const plusNumber = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    fetch(`http://10.58.4.135:8080/products/${id}`)
      .then(data => data.json())
      .then(data => {
        setDetailData(data.result);
      });
  }, []);

  useEffect(() => {
    fetch(`http://10.58.4.135:8080/review/${id}`)
      .then(res => res.json())
      .then(data => setPrefer(data.result));
  }, []);

  useEffect(() => {
    fetch(`http://10.58.4.135:8080/review/${id}/comments?offset=0`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setRemainLength(data.result.shift());
        setComments(current => {
          const newList = [...current, ...data.result];
          return newList;
        });
      });
  }, []);

  const requestMoreBtn = () => {
    fetch(
      `http://10.58.4.135:8080/review/${id}/comments?offset=${comments.length}`
    )
      .then(res => res.json())
      .then(data => {
        setRemainLength(data.result.shift());
        setComments(current => {
          const newList = [...current, ...data.result];
          return newList;
        });
      });
  };

  return (
    <div className="container">
      <SlideShow
        slidePosition={slidePosition}
        movePrev={movePrev}
        moveNext={moveNext}
        detailData={detailData}
      />
      <ProductContent
        FontAwesomeIcon={FontAwesomeIcon}
        detailData={detailData}
        quantity={quantity}
        minusNumber={minusNumber}
        plusNumber={plusNumber}
      />
      <ProductExplain
        detailData={detailData}
        FontAwesomeIcon={FontAwesomeIcon}
        faSquare={faSquare}
      />
      <section className="reviewStats">
        <div className="reviewTop">
          <h2 className="reviewTopHeaderTopHeader">상품후기</h2>
          <button className="reviewTopWrite">
            <FontAwesomeIcon icon={faPen} />
            <span>글쓰기</span>
          </button>
        </div>
        <div className="reviewStats">
          <div className="reviewStatsRating">
            <p className="ratingSummary">후기 159개 / 별점 4.9</p>
            <div>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="reviewStateContent">
            <div className="contentGender">
              <h3 className="contentTitle">성별 구매 평균</h3>
              <ul className="genderGraphics">
                <li className="genderGraphicsItem">
                  <span className="itemTitle">남성</span>
                  <div className="itemGraphic">
                    <FontAwesomeIcon icon={faMale} />
                  </div>
                  <span className="itemPercent">9%</span>
                </li>
                <li className="genderGraphicsItem">
                  <span className="itemTitle">여성</span>
                  <div className="itemGraphic">
                    <FontAwesomeIcon icon={faFemale} />
                  </div>
                  <span className="itemPercent">91%</span>
                </li>
              </ul>
            </div>
            <div className="contentAge">
              <h3 className="contentTitle">연령별 구매 평균</h3>
              <ul className="ageGraphics">
                {prefer &&
                  prefer.map((item, idx) => {
                    return (
                      <li key={idx} className="ageGraphicsItem">
                        <span className="itemTitle">{item.age}</span>
                        <div className="ageItemGraphicFill">
                          <div
                            className="fillingBar"
                            style={{
                              height: `${item.percent}%`,
                            }}
                          />
                          <div className="ageItemGraphic" />
                        </div>
                        <span className="itemPercent">{item.percent}%</span>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="contentInfo">
              <div className="contentInfoCategory">
                <h3 className="categoryTitle">정사이즈</h3>
                <div>
                  <span />
                  <div className="categoryBar" />
                </div>
                <div className="categoryGuide">
                  <span>보다 작아요</span>
                  <span>딱맞아요</span>
                  <span>보다 커요</span>
                </div>
              </div>
              <div className="contentInfoCategory">
                <h3 className="categoryTitle">실제 색상보다</h3>
                <div>
                  <span />
                  <div className="categoryBar" />
                </div>
                <div className="categoryGuide">
                  <span>어두워요</span>
                  <span>똑같아요</span>
                  <span>밝아요</span>
                </div>
              </div>
              <div className="contentInfoCategory">
                <h3 className="categoryTitle">품질에 대해</h3>
                <div>
                  <span />
                  <div className="categoryBar" />
                </div>
                <div className="categoryGuide">
                  <span>불만이에요</span>
                  <span>보통이에요</span>
                  <span>만족해요</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="UserReview">
        {comments &&
          comments.map((item, idx) => {
            return (
              <ul key={idx} className="UserItems">
                <li className="UserReviewHeader">
                  <img
                    src="https://raw.githubusercontent.com/kimjy-par/DRHEEWON_img/main/avatar/avatar3.jpeg"
                    alt=""
                  />
                  {item.userName}
                </li>
                <li className="UserReviewBody">
                  <div className="UserReviewTitle">{item.title}</div>
                  <div className="UserReviewRating">
                    {validStar.map((starEach, index) => {
                      if (starEach <= item.ratingStar) {
                        return <FontAwesomeIcon icon={faStar} />;
                      } else {
                        return <FontAwesomeIcon icon={whiteStar} />;
                      }
                    })}
                    <div className="UserReviewOpen">펼치기</div>
                  </div>
                </li>
              </ul>
            );
          })}
      </section>
      {remainLength ? (
        <div onClick={requestMoreBtn} className="ReviewMoreBtn">
          더 많은 후기 보기(+{remainLength}개)
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
