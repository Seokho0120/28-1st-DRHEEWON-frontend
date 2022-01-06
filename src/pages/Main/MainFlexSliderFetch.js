import { useState, useEffect } from 'react';

import { FlexibleSlider } from '../../components/FlexibleSlider/FlexibleSlider';

import config from '../../config/config.json';

const selectedCategory = {
  1: '워커',
  2: '운동화',
  3: '워커',
  4: '운동화',
  5: '워커',
  6: '운동화',
};

export default function MainFlexSliderFetch({ sectionArea, selectedIcon }) {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    switch (sectionArea) {
      case 'bestIcon':
        fetch(
          `${config.BASE_URL}products?limit=${selectedIcon}&subcategory=${selectedCategory[selectedIcon]}&sort=launch`
        )
          .then(res => res.json())
          .then(data => setProducts(data.result));
        break;
      case 'mdRecommend':
        fetch(
          `${config.BASE_URL}products?limit=${selectedIcon}&subcategory=${selectedCategory[selectedIcon]}&sort=price`
        )
          .then(res => res.json())
          .then(data => setProducts(data.result));
        break;
      default:
    }
  }, [sectionArea, selectedIcon]);

  useEffect(() => {
    products.length > 0 && setIsLoaded(true);
  }, [products]);

  return (
    <FlexibleSlider
      sectionArea={sectionArea}
      products={products}
      isLoad={isLoaded}
    />
  );
}
