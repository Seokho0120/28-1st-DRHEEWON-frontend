export default function SlideShow({
  slidePosition,
  movePrev,
  moveNext,
  detailData,
}) {
  return (
    <div className="slideShow">
      <ul
        className="slides"
        style={{ transform: `translateX(-${slidePosition * 560}px)` }}
      >
        {detailData.imageUrls &&
          detailData.imageUrls.map((img, idx) => {
            return (
              <li key={idx} className="slideContent">
                <img src={img} alt="drmartens" />
              </li>
            );
          })}
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
