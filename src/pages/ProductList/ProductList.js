import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faList,
  faChevronDown,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

// import dummyImg from '..';
import './ProductList.scss';

export default function ProductList() {
  return (
    <div>
      <div className="productList">
        {/* <header /> */}
        <header>
          <div>뒤로가기키</div>
          <div className="subHeadBottom">
            <h1>전체 보기</h1>
            <p>100개의 남성 전체 보기 상품이 있습니다.</p>
          </div>
        </header>
        <main>
          {/* <headContainer /> */}
          <section className="headContainer">
            <article className="layoutWrapper">
              {/* 변수명 수정 예정 */}
              <div className="layoutWrapperBorder">
                <div className="container">
                  <button id="firstCategory">슈즈</button>
                  <button id="secondCategory">부츠</button>
                  <button id="thirdCategory">전체 보기</button>
                </div>
                <div className="containerDetail">
                  남성 부츠 컬렉션입니다. 남성 부츠는 수십년 동안 자기 자신의
                  표현 수단으로서 자리잡았습니다. 클래식한 첼시 부츠부터
                  독보적인 오리지널 부츠, 얼터너티브한 디자인까지 다양한
                  스타일을 만나보세요.
                </div>
                <div className="filterButtonWrapper">
                  <button className="filterButton">
                    <span className="filterButtonList">
                      <FontAwesomeIcon icon={faList} />
                    </span>
                    <span className="filterButtonTxt">필터</span>
                    <span className="filterButtonArrow">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </button>
                </div>
              </div>
            </article>
            {/* 필터창 구현예정
                click event 발생시 opacity 변동으로 인한 필터창 출현 */}
            <article className="filterContainer">
              <div className="filterLayoutWrapper">
                <form action="#!" className="filterListContainer_form">
                  <div>정렬</div>
                  <div>사이즈</div>
                  <div>가격</div>
                  <div>색상</div>
                </form>
                <div className="filterListContainer_body">
                  <button>초기화</button>
                  <button>적용</button>
                </div>
              </div>
            </article>
          </section>
          {/* <mainContainer /> */}
          <section className="mainContainer">
            <article className="mainContainerWrapper">
              <ul className="productList">
                <li className="item">
                  <div className="itemImage">
                    <img src="/img/dummyImg.jpg" alt="더미이미지" />
                  </div>
                  <div className="itemRow">
                    <div className="itemColumnLeft">
                      <h2 className="title">상품 이름</h2>
                      <div className="additionalInfo">
                        <p>
                          <span>아이템 설명</span>
                        </p>
                      </div>
                      <button className="likesButton">
                        <div className="heartIcon">
                          <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <span>1234</span>
                      </button>
                    </div>
                    <div className="itemColumnRight">
                      <div className="priceWrapper">
                        <span>₩ 300,000</span>
                      </div>
                      <button className="cartButton">
                        <span className="cartButtonText">장바구니 담기</span>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
              <div />
            </article>
          </section>
        </main>
        {/* <popularKeyword /> */}
        <footer>
          <section className="popularKeyword">
            <article className="keywordHead">
              <h2>인기 키워드</h2>
              <p>당신에게 맞는 키워드를 클릭해 보세요.</p>
            </article>
            <ul className="keywordList">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
            </ul>
          </section>
        </footer>
      </div>
    </div>
  );
}
