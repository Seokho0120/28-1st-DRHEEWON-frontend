import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './RegisterLogin.scss';

const ContentHeader = ({ pageInfo }) => {
  return (
    <header className="infoPage">
      <span>
        <FontAwesomeIcon icon={faArrowLeft} size="3x" className="backArrow" />
      </span>
      <h1>{pageInfo}</h1>
    </header>
  );
};

export default ContentHeader;
