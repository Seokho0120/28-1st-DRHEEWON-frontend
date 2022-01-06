import { useNavigate, useLocation } from 'react-router-dom';

import Filter from '../../components/ProductList/Filter';
import MainContainer from '../../components/ProductList/MainContainer';
import FilterButton from '../../components/ProductList/FilterButton';
import CategoryButton from '../../components/ProductList/CategoryButton';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ProductList.scss';

const KEYWORD_LIST = [
  '롱부츠',
  '베스트셀러',
  '콜라보레이션',
  '첼시부츠',
  '슈폴리시 사용법',
  '스웨이드 클리너 사용법',
  '슬리퍼',
];

export default function ProductList() {
  const navigate = useNavigate();
  const location = useLocation();

  const updateList = buttonList => {
    const list = buttonList;
    const queryString = `${list}`;

    navigate(`/products?subcategory=${queryString}`);
  };

  return (
    <div>
      <div className="productList">
        <header>
          <div className="headerWrap">
            <button>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <ul className="subHeadBottom">
              <h1>전체 보기</h1>
              <p>{ProductList.length}개의 남성 전체 보기 상품이 있습니다.</p>
            </ul>
          </div>
        </header>
        <main>
          <section className="headContainer">
            <article className="layoutWrapper">
              <div className="layoutWrapperBorder">
                <CategoryButton updateList={updateList} />
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
              <MainContainer locationSearch={location.search} />
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
              {KEYWORD_LIST.map((list, idx) => {
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
