import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const SelectCart = () => {
  // 전체 상품 선택
  const checkedAllProduct = () => {};

  // 선택 삭제
  const deleteProductSelection = () => {};

  return (
    <section className="choiceHandlerWrap">
      <div className="choiceHandler">
        <label>
          <input type="checkbox" />
          <span onClick={checkedAllProduct}>전체 선택</span>
        </label>
        <button type="button">
          <FontAwesomeIcon icon={faTrashAlt} size="2x" className="trashAlt" />
          <span onClick={deleteProductSelection}>선택 삭제 (1)</span>
        </button>
      </div>
    </section>
  );
};

export default SelectCart;
