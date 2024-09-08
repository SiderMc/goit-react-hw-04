import { GrSearch } from 'react-icons/gr';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const handleSearch = event => {
    event.preventDefault();
    const query = event.target.elements.search.value.trim();
    if (!query) {
      return toast.error('The search field cannot be empty.');
    } else if (query.length < 2) {
      return toast.error('Search query must be at least 2 characters long');
    }
    onSearch(event.target.elements.search.value);
    event.target.reset();
  };

  return (
    <>
      <form
        className={css.search__form}
        onSubmit={handleSearch}
        aria-label="Search">
        <div className={css.form__block}>
          <input
            type="text"
            name="search"
            placeholder="Find photos"
            autoComplete="off"
            className={css.search__input}
          />
          <button type="submit" className={css.btn}>
            <GrSearch />
          </button>
        </div>
      </form>
      <Toaster position="top-right" />
    </>
  );
}
