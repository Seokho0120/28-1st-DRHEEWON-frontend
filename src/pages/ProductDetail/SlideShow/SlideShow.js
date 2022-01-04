export default function SlideShow({ slidePosition, movePrev, moveNext }) {
  return (
    <div className="slideShow">
      <ul
        className="slides"
        style={{ transform: `translateX(-${slidePosition * 560}px)` }}
      >
        <li className="slideContent">
          <img src="ProductDetail/drmartens1.jpeg" alt="drmartens1" />
        </li>
        <li className="slideContent">
          <img src="ProductDetail/drmartens2.jpeg" alt="drmartens2" />
        </li>
        <li className="slideContent">
          <img src="ProductDetail/drmartens3.jpeg" alt="drmartens3" />
        </li>
        <li className="slideContent">
          <img src="ProductDetail/drmartens4.jpeg" alt="drmartens4" />
        </li>
        <li className="slideContent">
          <img src="ProductDetail/drmartens5.jpeg" alt="drmartens5" />
        </li>
      </ul>
      <div className="slideButton">
        <button className="prev" onClick={movePrev}>
          &lang;
        </button>
        <button className="next" onClick={moveNext}>
          &rang;
        </button>
      </div>
    </div>
  );
}
