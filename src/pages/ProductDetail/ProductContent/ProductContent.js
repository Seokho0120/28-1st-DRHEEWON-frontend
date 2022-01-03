export default function ProductDetail({
  FontAwesomeIcon,
  faShareAlt,
  faHeart,
  faStar,
  detailData,
  sizeBtnColorChange,
  sizeColor,
  qunatity,
  minusNumber,
  faMinus,
  plusNumber,
  faPlus,
  faWonSign,
}) {
  return (
    <aside className="productDetail">
      <div className="detailTop">
        <FontAwesomeIcon icon={faShareAlt} />
        <div className="topFaheart">
          <FontAwesomeIcon icon={faHeart} />
          <span>7552</span>
        </div>
        <div className="topStar">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <span>716건</span>
        </div>
      </div>
      <div className="detailTitle">
        <span>{detailData.productName}</span>
      </div>
      <div className="detailGuide">
        <button>
          <span>회원 혜택 보기</span>
        </button>
      </div>
      <div className="detailCenter">
        <button className="centerCount">
          <span>
            원하는 사이즈가 품절인가요?
            <div className="centerCountUnderline" />
          </span>
        </button>
        <div className="centerSizeDetail">
          {detailData.centerSize &&
            detailData.centerSize.map((ele, idx) => {
              return (
                <button
                  onClick={() => sizeBtnColorChange(idx)}
                  className={`centerSize ${sizeColor}`}
                  key={idx}
                >
                  <p>{ele.size}</p>
                </button>
              );
            })}
        </div>
        <div className="centerColorDetail">
          {detailData.centerColor &&
            detailData.centerColor.map((colorItem, idx) => {
              return (
                <button
                  className={`centerColor ${colorItem.color}`}
                  key={idx}
                />
              );
            })}
        </div>
        <div className="centerOption">
          <div className="set">
            <p className="count">수량</p>
            <input type="number" min="1" max="100" value={qunatity} />
            <button onClick={minusNumber} className="minus">
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <button onClick={plusNumber} className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className="price">
            <FontAwesomeIcon icon={faWonSign} />
            <span>{(qunatity * (detailData.price ?? 0)).toLocaleString()}</span>
            {/* <span>{detailData.price}</span> */}
          </div>
        </div>
      </div>
      <div className="detailBtn">
        <button className="cart">장바구니</button>
        <button className="buy">구매하기</button>
      </div>
    </aside>
  );
}
