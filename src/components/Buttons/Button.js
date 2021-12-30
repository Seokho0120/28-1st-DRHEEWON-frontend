export function MainSlideButton({ type, onClickMethod }) {
  return (
    <button name={type} onClick={onClickMethod}>
      <span>{type.includes('Prev') ? `<` : `>`}</span>
    </button>
  );
}

export function MainBorderButton({
  type,
  btnName,
  selectedIcon,
  onClickMethod,
}) {
  const isBtnActive = selectedIcon === parseInt(btnName);

  const borderBtnList = {
    goMoreWhite: {
      fontSize: '24px',
      border: '0.5px solid white',
      color: '#fff',
      text: '자세히 보기 >',
      padding: '15px 30px',
    },
    goMoreBlack: {
      fontSize: '24px',
      border: '0.5px solid black',
      color: 'black',
      text: '자세히 보기 >',
      padding: '15px 30px',
    },
    putCart: {
      fontSize: '18px',
      border: '1px solid black',
      color: 'black',
      text: '장바구니 담기',
      padding: '10px 17px',
    },
    longBoots: {
      fontSize: '18px',
      border: '1px solid black',
      color: 'black',
      text: '롱 부츠',
      padding: '10px 25px',
    },
    collabo: {
      fontSize: '18px',
      border: '1px solid black',
      color: 'black',
      text: '콜라보레이션',
      padding: '10px 25px',
    },
    furBoots: {
      fontSize: '18px',
      border: '1px solid black',
      color: 'black',
      text: 'FUR부츠',
      padding: '10px 25px',
    },
    accGoods: {
      fontSize: '18px',
      border: '1px solid black',
      color: 'black',
      text: 'ACC용품',
      padding: '10px 25px',
    },
  };
  return (
    <button
      name={btnName}
      className={isBtnActive ? 'active' : ''}
      style={{ border: borderBtnList[type].border }}
      onClick={onClickMethod}
    >
      <div
        style={{
          fontSize: borderBtnList[type].fontSize,
          color: borderBtnList[type].color,
          padding: borderBtnList[type].padding,
          pointerEvents: 'none',
        }}
      >
        <span>{borderBtnList[type].text}</span>
      </div>
    </button>
  );
}
