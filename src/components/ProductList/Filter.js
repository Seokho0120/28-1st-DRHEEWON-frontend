import React, { useState } from 'react';

const Filter = props => {
  const filterLayoutWrapper = () => {
    const [isOpen, setMenu] = useState(false);

    const toggleMenu = () => {
      setMenu(isOpen => !isOpen);
    };
    return (
      <article className={isOpen ? 'filterLayoutWrapper' : 'hide'}>
        <div className="filterContainer">
          <form action="#!" className="filterListContainer_form">
            <div className="containerField">
              <div className="containerFieldTitle">정렬</div>
              <ul>
                <li className="itemArray">
                  <div className="itemArrayWrap">
                    <div>
                      <input type="radio" />
                    </div>
                    <span>인기순</span>
                  </div>
                </li>
                <li className="itemArray">
                  <div className="itemArrayWrap">
                    <div>
                      <input type="radio" />
                    </div>
                    <span>신상품순</span>
                  </div>
                </li>
                <li className="itemArray">
                  <div className="itemArrayWrap">
                    <div>
                      <input type="radio" />
                    </div>
                    <span>높은 가격 순</span>
                  </div>
                </li>
                <li className="itemArray">
                  <div className="itemArrayWrap">
                    <div>
                      <input type="radio" />
                    </div>
                    <span>낮은 가격 순</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="containerField">
              <div className="containerFieldTitle">사이즈</div>
              <ul>
                <li>
                  <div className="sizeBox">
                    <input type="checkbox" />
                    <span>220</span>
                  </div>
                </li>
                <li>
                  <div className="sizeBox">
                    <input type="checkbox" />
                    <span>230</span>
                  </div>
                </li>
                <li>
                  <div className="sizeBox">
                    <input type="checkbox" />
                    <span>240</span>
                  </div>
                </li>
                <li>
                  <div className="sizeBox">
                    <input type="checkbox" />
                    <span>250</span>
                  </div>
                </li>
                <li>
                  <div className="sizeBox">
                    <input type="checkbox" />
                    <span>260</span>
                  </div>
                </li>
                <li>
                  <div className="sizeBox">
                    <input type="checkbox" />
                    <span>270</span>
                  </div>
                </li>
                <li>
                  <div className="sizeBox">
                    <input type="checkbox" />
                    <span>280</span>
                  </div>
                </li>
                <li>
                  <div className="sizeBox">
                    <input type="checkbox" />
                    <span>290</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="containerField">
              <div className="containerFieldTitle">가격</div>
              <ul className="containerFieldInput">
                <li>
                  <input
                    type="range"
                    id="priceRange"
                    min="10,000"
                    max="500,000"
                    step="10,000"
                  />
                </li>
                <div>10,000~500,000</div>
              </ul>
            </div>
            <div className="containerField">
              <div className="containerFieldTitle">색상</div>
              <ul className="containerFieldTitle_colors">
                <li>
                  <div>white</div>
                  <input type="checkbox" id="firstColor" />
                </li>
                <li>
                  <div>black</div>
                  <input type="checkbox" id="secondColor" />
                </li>
                <li>
                  <div>brown</div>
                  <input type="checkbox" id="thirdColor" />
                </li>
              </ul>
            </div>
          </form>
          <div className="filterListContainer_body">
            <button>초기화</button>
            <button>적용</button>
          </div>
        </div>
      </article>
    );
  };
};

export default Filter;
