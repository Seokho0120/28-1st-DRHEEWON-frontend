import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function VerticalItems({ item, index }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = () => {
    setIsSelected(!isSelected);
  };

  return (
    <li>
      <div className="verticalEachHead strong">
        {item.name}

        <button name={index} onClick={handleSelected}>
          <FontAwesomeIcon icon={isSelected ? faChevronUp : faChevronDown} />
        </button>
      </div>

      <ul className={isSelected ? 'active' : ''}>
        {item.selectContent.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </li>
  );
}
