import { BorderButton } from '../../../components/Buttons/BorderButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export default function MainMdRecommendDetail({ item }) {
  return (
    <div className="mdRecommendDetail strong">
      <p>{item.productName}</p>
      <span>
        <FontAwesomeIcon icon={faHeart} />
        {1234}
      </span>
      <div className="flexSliderImages">
        <img src={item.thumbnailImage} alt="dummy" />
        <img src={item.thumbnailImage} alt="dummy" />
      </div>
      <div className="detailBox">
        <p>{`₩ ${item.price
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</p>
        <BorderButton type="putCart" />
      </div>
    </div>
  );
}
