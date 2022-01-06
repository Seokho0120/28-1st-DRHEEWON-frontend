import React from 'react';
import { faList, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FilterButton = props => {
  return (
    <div>
      <button
        className="filterButton"
        // onClick={() => toggleMenu()}
      >
        <span className="filterButtonList">
          <FontAwesomeIcon icon={faList} />
        </span>
        <span className="filterButtonTxt">필터</span>
        <span className="filterButtonArrow">
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </button>
    </div>
  );
};

export default FilterButton;
