export function MainSlideButton({ type, onClickMethod }) {
  return (
    <button name={type} onClick={onClickMethod}>
      <span>{type.includes('Prev') ? `<` : `>`}</span>
    </button>
  );
}

export function MainBorderButton({ type }) {
  const borderBtnList = {
    goMoreWhite: {
      border: '0.5px solid white',
      color: '#fff',
      text: '자세히 보기 >',
      padding: '15px 30px',
    },
    goMoreBlack: {
      border: '1px solid black',
      color: 'black',
    },
    putCart: {
      border: '1px solid black',
      color: 'black',
      text: '장바구니 담기',
      padding: '10px 17px',
    },
  };

  return (
    <button name={type} style={{ border: borderBtnList[type].border }}>
      <div
        style={{
          fontSize: '24px',
          color: borderBtnList[type].color,
          padding: borderBtnList[type].padding,
        }}
      >
        <span>{borderBtnList[type].text}</span>
      </div>
    </button>
  );
}
