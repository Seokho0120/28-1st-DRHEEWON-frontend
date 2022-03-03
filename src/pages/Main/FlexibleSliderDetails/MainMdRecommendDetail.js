import { BorderButton } from '../../../components/Buttons/BorderButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import { alertMessage } from '../../../components/FetchAlertMessage/FetchAlertMessage';

import config from '../../../config/config.json';

export default function MainMdRecommendDetail({ item, userToken }) {
  const inputCart = () => {
    if (userToken) {
      fetch(`${config.BASE_URL}carts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: userToken,
        },
        body: JSON.stringify({ productId: item.id, quantity: 1, size: '270' }),
      }).then(res => {
        alert(alertMessage[res.status]);
      });
    } else {
      alert('로그인부터 해주세요!');
    }
  };

  return (
    <div className="mdRecommendDetail strong">
      <p>{item.productName}</p>
      <span>
        <FontAwesomeIcon icon={faHeart} />
        {1234}
      </span>
      <div className="flexSliderImages">
        <a href={`/productdetail?id=${item.id}`}>
          <img src={item.thumbnailImage} alt="dummy" />
          <img src={item.thumbnailImage} alt="dummy" />
        </a>
      </div>
      <div className="detailBox">
        <p>{`₩ ${item.price
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</p>
        <BorderButton type="putCart" onClickMethod={inputCart} />
      </div>
    </div>
  );
}
