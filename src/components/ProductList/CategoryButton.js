import React from 'react';
// import { useLocation } from 'react-router';

// function categoryButton() {
//   const location = useLocation();
//   console.log(location);
// }
// const [tab, setTab] = useState < string > 'curr';

export default function CategoryButton({ updateList }) {
  return (
    <div className="container">
      <button
        type="button"
        className="containerCategory"
        onClick={() => updateList('워커')}
        subcategory="워커"
      >
        워커
      </button>
      <button
        type="button"
        className="containerCategory"
        onClick={() => updateList('운동화')}
        subcategory="운동화"
      >
        운동화
      </button>
      <button
        type="button"
        className="containerCategory"
        onClick={() => updateList('전체보기')}
        subcategory=""
      >
        전체 보기
      </button>
      {/* <button
        className={`btn ${tab === 'curr' ? 'active' : ''}`}
        onClick={() => setDealTab('curr')}
      >
        1번버튼
      </button>
      <button
        classNam={`-btn ${tab === 'prev' ? 'active' : ''}`}
        onClick={() => setDealTab('prev')}
      >
        2번버튼
      </button> */}
    </div>
  );
}
