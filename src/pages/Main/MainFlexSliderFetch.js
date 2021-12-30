import { useState, useEffect } from 'react';

import { FlexibleSlider } from '../../components/FlexibleSlider/FlexibleSlider';

export default function MainFlexSliderFetch({ sectionArea, selectedIcon }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    sectionArea === 'bestIcon'
      ? setProducts([
          {
            id: 1,
            name: '고급진 신발',
            imgPath: 'images/black_shoe.png',
            amount: '₩ 290,000',
            like: 1007,
          },
          {
            id: 2,
            name: '싼 신발 mk.2',
            imgPath: 'images/black_shoe.png',
            amount: '₩ 130,000',
            like: 1558,
          },
          {
            id: 3,
            name: '애매한 신발',
            imgPath: 'images/black_shoe.png',
            amount: '₩ 155,000',
            like: 55,
          },
          {
            id: 4,
            name: '비싼 신발',
            imgPath: 'images/black_shoe.png',
            amount: '₩ 430,000',
            like: 587,
          },
          {
            id: 5,
            name: '만원의 행복',
            imgPath: 'images/black_shoe.png',
            amount: '₩ 10,000',
            like: 9999,
          },
          {
            id: 6,
            name: '싼 신발 mk.1',
            imgPath: 'images/black_shoe.png',
            amount: '₩ 120,000',
            like: 1154,
          },
        ])
      : setProducts([
          {
            id: 1,
            name: '사고 싶지만 망설여지는 신발',
            imgPath: 'images/black_shoe.png',
            amount: '₩ 120,000',
            like: 1287,
          },
          {
            id: 2,
            name: '중간 가격이라 살만한 신발',
            imgPath: 'images/black_shoe.png',
            amount: '₩ 110,000',
            like: 1855,
          },
          {
            id: 3,
            name: '비싼 것 같은데 싼 거같은 신발',
            imgPath: 'images/black_shoe.png',
            amount: '₩ 90,000',
            like: 998,
          },
        ]);
  }, [sectionArea]);

  return <FlexibleSlider sectionArea={sectionArea} products={products} />;
}
