import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ loadMore }) {
  return (
    <div className={css.load__action}>
      <button type="buttons" className={css.load__more_btn} onClick={loadMore}>
        Load More
      </button>
    </div>
  );
}
