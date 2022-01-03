import Filter from '../../components/ProductList/Filter';
import MainContainer from '../../components/ProductList/MainContainer';
import FilterButton from '../../components/ProductList/FilterButton';

import {
  faHeart,
  faList,
  faChevronDown,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ProductList.scss';

export default function ProductList() {
  const KEYWORDLIST = ['1', '2', '3', '4', '5', '6', '7'];

  return (
    <div>
      <div className="productList">
        {/* <header /> */}
        <header>
          <button>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <div className="subHeadBottom">
            <h1>전체 보기</h1>
            <p>100개의 남성 전체 보기 상품이 있습니다.</p>
          </div>
        </header>
        <main>
          {/* <headContainer /> */}
          <section className="headContainer">
            <article className="layoutWrapper">
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
                    <div className={'keywordListArr'}>{list}</div>
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
