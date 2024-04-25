import "./PageControls.css";

const PageControls = ({ page, setPage, totalPages }) => {
  const prevDisabled = page > 1 ? false : true;
  const nextDisabled = page < totalPages ? false : true;
  const onPrev = () => {
    if (!prevDisabled) {
      setPage(page - 1);
    }
  };

  const onNext = () => {
    if (!nextDisabled) {
      setPage(page + 1);
    }
  };
  return (
    <div className="page-controls">
      <button onClick={onPrev} disabled={prevDisabled}>
        👈
      </button>
      <span>
        {page} / {totalPages}
      </span>
      <button onClick={onNext} disabled={nextDisabled}>
        👉
      </button>
    </div>
  );
};

export default PageControls;
