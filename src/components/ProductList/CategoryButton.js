import React from 'react';
import { useLocation } from 'react-router';

// function categoryButton() {
//   const location = useLocation();
//   console.log(location);
// }

export default function CategoryButton({ updateOffset }) {
  return (
    <div className="container">
      <button className="containerCategory" onClick={() => updateOffset(1)}>
        워커
      </button>
      <button className="containerCategory" onClick={() => updateOffset(2)}>
        운동화
      </button>
      <button className="containerCategory" onClick={() => updateOffset(3)}>
        전체 보기
      </button>
    </div>
  );
}
