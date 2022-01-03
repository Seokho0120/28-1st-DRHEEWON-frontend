export function SliderButton({ type, onClickMethod }) {
  return (
    <button name={type} onClick={onClickMethod}>
      <span>{type.includes('Prev') ? `<` : `>`}</span>
    </button>
  );
}
