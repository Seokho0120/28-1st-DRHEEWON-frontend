export default function ProductExplain({
  detailData,
  FontAwesomeIcon,
  faSquare,
}) {
  return (
    <div className="productExplain">
      <div className="explainText">
        <p className="explainTextTitle">PRODUCT & MATERIAL DETAILS</p>
        <p className="explainTextDetail">
          닥터마틴의 반항정신을 담은 1460 부츠의 업데이트로 청키한
          콰드(Quad)아웃솔이 특징입니다. <br />
          사이드 지퍼가 있어 편안한 착화가 가능합니다. <br />
          (UK4 기준 약 4.7cm굽높이)폴리시드 스무스는 스무스 가죽보다 광택감이 더
          우수하며, 매끄러운 질갑을 가지고 있습니다.
        </p>
      </div>
      <div className="explainDetail">
        <div className="explainSize">
          <h2>신발 사이즈</h2>
          <table className="table">
            <thead>
              <tr>
                <th className="tableTitle">한국</th>
                <th className="tableTitle">UK</th>
                <th className="tableTitle">한국</th>
                <th className="tableTitle">UK</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tableBody">220</td>
                <td className="tableBody">3</td>
                <td className="tableBody">260</td>
                <td className="tableBody">7</td>
              </tr>
              <tr>
                <td className="tableBody">230</td>
                <td className="tableBody">4</td>
                <td className="tableBody">270</td>
                <td className="tableBody">8</td>
              </tr>
              <tr>
                <td className="tableBody">240</td>
                <td className="tableBody">5</td>
                <td className="tableBody">280</td>
                <td className="tableBody">9</td>
              </tr>
              <tr>
                <td className="tableBody">250</td>
                <td className="tableBody">6</td>
                <td className="tableBody">290</td>
                <td className="tableBody">10</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="explainContents">
          <ul className="ContentsList">
            <li>
              <div>모델명</div>
              <p>{detailData.productName}</p>
            </li>
            <li>
              <div>제조연월</div>
              <p>제품라벨 표기</p>
            </li>
            <li>
              <div>제품 소재</div>
              <p>{detailData.material}</p>
            </li>
            <li>
              <div> 제조국 </div>
              <p>{detailData.country}</p>
            </li>
            <li>
              <div>품질보증기준</div>
              <p>1544-6486(내선2번) 전국 매장 유/무상 A/S</p>
            </li>
          </ul>
          <ul className="ContentsDesk">
            <li>
              <FontAwesomeIcon icon={faSquare} />
              상품번호 : 15265001
            </li>
            <li>
              <FontAwesomeIcon icon={faSquare} />
              치수 : UK 사이즈 기준(mm표기)/ 신발에 따라 사이즈 상이하니 구매
              후기 참고
            </li>
            <li>
              <FontAwesomeIcon icon={faSquare} />
              제조자 : Dr. Martens
            </li>
            <li>
              <FontAwesomeIcon icon={faSquare} />
              제조연월 : 소비자피해보상규정에 따름
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
