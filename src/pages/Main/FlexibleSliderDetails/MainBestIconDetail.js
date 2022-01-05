import { BorderButton } from '../../../components/Buttons/BorderButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export default function MainBestIconDetail({ item }) {
  return (
    <>
      <img src={item.thumbnailImage} alt="dummy" />
      <img src={item.thumbnailImage} alt="dummy" />
      <div className="bestIconContentsEachDetail strong">
        <div className="detailLeft">
          <p>{item.productName}</p>
          <p>{item.centerColor}</p>
          <span>
            <FontAwesomeIcon icon={faHeart} />
            1234
          </span>
        </div>
        <div className="detailRight">
          <p>{`₩ ${item.price
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</p>
          <BorderButton type="putCart" />
        </div>
      </div>
    </>
  );
}
