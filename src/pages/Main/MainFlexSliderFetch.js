import { useState, useEffect } from 'react';

import { FlexibleSlider } from '../../components/FlexibleSlider/FlexibleSlider';

export default function MainFlexSliderFetch({ sectionArea, selectedIcon }) {
  const [products, setProducts] = useState([]);
  const [isProductFetched, setIsProductFetched] = useState(false);

  useEffect(() => {
    setIsProductFetched(false);
    switch (sectionArea) {
      case 'bestIcon':
        fetch(`http://localhost:3000/data/bestIcon${selectedIcon}.json`)
          .then(res => res.json())
          .then(data => setProducts(data));
        break;
      case 'mdRecommend':
        fetch(`http://localhost:3000/data/mdRecommend${selectedIcon}.json`)
          .then(res => res.json())
          .then(data => setProducts(data));
        break;
      default:
    }
  }, [sectionArea, selectedIcon]);

  useEffect(() => {
    products.length > 0 && setIsProductFetched(true);
  }, [products]);

  return (
    <FlexibleSlider
      sectionArea={sectionArea}
      products={products}
      isLoad={isProductFetched}
    />
  );
}
