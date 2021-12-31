import { useState, useEffect } from 'react';

import { FlexibleSlider } from '../../components/FlexibleSlider/FlexibleSlider';
import { bestIconContentsData, mdRecommendContentsData } from './MainMockData';

export default function MainFlexSliderFetch({ sectionArea, selectedIcon }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    sectionArea === 'bestIcon'
      ? setProducts(bestIconContentsData)
      : setProducts(mdRecommendContentsData);
  }, [sectionArea]);

  return <FlexibleSlider sectionArea={sectionArea} products={products} />;
}
