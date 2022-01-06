import React from 'react';

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
    </div>
  );
}
