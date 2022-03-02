import { BorderButton } from '../../../components/Buttons/BorderButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import { alertMessage } from '../../../components/FetchAlertMessage/FetchAlertMessage';

import config from '../../../config/config.json';

const colorName = {
  black: '블랙',
  brown: '브라운',
  white: '화이트',
};

export default function MainBestIconDetail({ item, userToken }) {
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
    <>
      <a href={`/productDetail/${item.id}`}>
        <img src={item.thumbnailImage} alt="dummy" />
        <img src={item.thumbnailImage} alt="dummy" />
      </a>
      <div className="bestIconContentsEachDetail strong">
        <div className="detailLeft">
          <p>{item.productName}</p>
          <p>{colorName[item.centerColor]}</p>
          <span>
            <FontAwesomeIcon icon={faHeart} />
            1234
          </span>
        </div>
        <div className="detailRight">
          <p>{`₩ ${item.price
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</p>
          <BorderButton type="putCart" onClickMethod={inputCart} />
        </div>
      </div>
    </>
  );
}
