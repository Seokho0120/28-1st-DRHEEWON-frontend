import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import queryString from 'querystring';

import Filter from '../../components/ProductList/Filter';
import MainContainer from '../../components/ProductList/MainContainer';
import FilterButton from '../../components/ProductList/FilterButton';
import CategoryButton from '../../components/ProductList/CategoryButton';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ProductList.scss';

const API = 'http://8ec5-211-106-114-186.ngrok.io/products?subcategory';
// const { search } = this.props.location;
// const queryObj = queryString.parse(search);

const KEYWORDLIST = [
  '롱부츠',
  '베스트셀러',
  '콜라보레이션',
  '첼시부츠',
  '슈폴리시 사용법',
  '스웨이드 클리너 사용법',
  '슬리퍼',
];

const objArr = [updateOffset(1), updateOffset(2), updateOffset(3)];

export default function ProductList() {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate(objArr);
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenu(isOpen => !isOpen);
  // };
  useEffect(() => {
    fetch(`${API}${location.search}`)
      .then(res => res.json())
      .then(data => setCategory(data.results));
  }, []);

  const updateOffset = buttonIndex => {
    // const LIMIT = 8;
    // const offset = buttonIndex * LIMIT;
    // const queryString = `limit=${LIMIT}&offset=${offset}`;
    const queryString = useNavigate;
    console.log(queryString);

    navigate(`?${queryString}`);
  };

  return (
    <div>
      <div className="productList">
        <header>
          <div className="headerWrap">
            <button>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <div className="subHeadBottom">
              <h1>전체 보기</h1>
              <p>100개의 남성 전체 보기 상품이 있습니다.</p>
            </div>
          </div>
        </header>
        <main>
          <section className="headContainer">
            <article className="layoutWrapper">
              <div className="layoutWrapperBorder">
                <CategoryButton updateOffset={updateOffset} />
                <div className="containerDetail">
                  남성 부츠 컬렉션입니다. 남성 부츠는 수십년 동안 자기 자신의
                  표현 수단으로서 자리잡았습니다. 클래식한 첼시 부츠부터
                  독보적인 오리지널 부츠, 얼터너티브한 디자인까지 다양한
                  스타일을 만나보세요.
                </div>
                <div className="filterButtonWrapper">
                  <FilterButton />
                </div>
              </div>
            </article>
            <Filter />
          </section>
          <section className="mainContainer">
            <article className="mainContainerWrapper">
              <MainContainer />
            </article>
          </section>
        </main>
        <section>
          <div className="popularKeyword">
            <article className="keywordHead">
              <h2>인기 키워드</h2>
              <p>당신에게 맞는 키워드를 클릭해 보세요.</p>
            </article>
            <ul className="keywordList">
              {KEYWORDLIST.map((list, idx) => {
                return (
                  <li key={idx}>
                    <div className="keywordListArr">{list}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
