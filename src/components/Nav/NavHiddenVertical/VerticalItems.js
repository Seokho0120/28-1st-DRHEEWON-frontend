import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import SetClassCondition from '../../customlib/SetClassCondition';

export default function VerticalItems({ item, index }) {
  const [isSelected, setIsSelected] = useState(false);

  const navigate = useNavigate();

  const handleSelected = () => {
    setIsSelected(!isSelected);
  };

  const goToList = event => {
    const [detailCategory, listId] = event.target
      .getAttribute('name')
      .split('_');

    const listCategory = item.name;

    const queryString = `?listCategory=${listCategory}&name=${detailCategory}&id=${listId}`;

    navigate(`/productList${queryString}`);
  };

  return (
    <li>
      <div className="verticalEachHead strong">
        {item.name}

        <button name={index} onClick={handleSelected}>
          <FontAwesomeIcon icon={isSelected ? faChevronUp : faChevronDown} />
        </button>
      </div>

      <ul className={SetClassCondition('', isSelected, 'active')}>
        {item.selectContent.map((item, index) => (
          <li key={index} name={`${item.name}_${index}`} onClick={goToList}>
            {item.name}
          </li>
        ))}
      </ul>
    </li>
  );
}
