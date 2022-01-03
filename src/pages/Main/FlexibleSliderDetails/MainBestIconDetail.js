import { BorderButton } from '../../../components/Buttons/BorderButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export default function MainBestIconDetail({ item }) {
  return (
    <>
      <img src={item.imgPath} alt="dummy" />
      <img src={item.imgPath} alt="dummy" />
      <div className="bestIconContentsEachDetail strong">
        <div className="detailLeft">
          <p>{item.name}</p>
          <p>오리지널 | 블랙</p>
          <span>
            <FontAwesomeIcon icon={faHeart} />
            {item.like}
          </span>
        </div>
        <div className="detailRight">
          <p>{`₩ ${item.amount
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</p>
          <BorderButton type="putCart" />
        </div>
      </div>
    </>
  );
}
