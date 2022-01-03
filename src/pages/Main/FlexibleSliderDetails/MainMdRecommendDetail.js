import { BorderButton } from '../../../components/Buttons/BorderButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export default function MainMdRecommendDetail({ item }) {
  return (
    <div className="mdRecommendDetail strong">
      <p>{item.name}</p>
      <span>
        <FontAwesomeIcon icon={faHeart} />
        {item.like}
      </span>
      <div className="flexSliderImages">
        <img src={item.imgPath} alt="dummy" />
        <img src={item.imgPath} alt="dummy" />
      </div>
      <div className="detailBox">
        <p>{`₩ ${item.amount
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</p>
        <BorderButton type="putCart" />
      </div>
    </div>
  );
}
