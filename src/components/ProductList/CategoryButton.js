import React from 'react';

export default function CategoryButton({ updateOffset }) {
  return (
    <div className="container">
      <button className="containerCategory" onClick={() => updateOffset(1)}>
        슈즈
      </button>
      <button className="containerCategory" onClick={() => updateOffset(2)}>
        부츠
      </button>
      <button className="containerCategory" onClick={() => updateOffset(3)}>
        전체 보기
      </button>
    </div>
  );
}
