import { useState, useEffect } from 'react';

import { FlexibleSlider } from '../../components/FlexibleSlider/FlexibleSlider';

export default function MainFlexSlider({ sectionArea, selectedIcon }) {
  const [products, setProducts] = useState([]);
  const [isProducted, setIsProducted] = useState(false);

  useEffect(() => {
    setIsProducted(false);
    switch (sectionArea) {
      case 'bestIcon':
        `http://localhost:3000/data/bestIcon${selectedIcon}.json`
          .then(res => res.json())
          .then(data => setProducts(data));
        break;
      case 'mdRecommend':
        `http://localhost:3000/data/mdRecommend${selectedIcon}.json`
          .then(res => res.json())
          .then(data => setProducts(data));
        break;
      default:
    }
  }, [sectionArea, selectedIcon]);

  useEffect(() => {
    products.length > 0 && setIsProducted(true);
  }, [products]);

  return (
    <FlexibleSlider
      sectionArea={sectionArea}
      products={products}
      isLoad={isProducted}
    />
  );
}
