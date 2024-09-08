import 'modern-normalize';
import dataPhotos from '../../Services/gallery-api';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';
import css from './App.module.css';
import { useEffect, useState } from 'react';

export default function App() {
  const [value, setValue] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(false);
  const [loader, setLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imageDesc, setImageDesc] = useState('');

  const inputQuery = query => {
    setPhotos([]);
    setPage(1);
    return setValue(query);
  };
  useEffect(() => {
    if (value === '') {
      return;
    }
    const responseData = async () => {
      try {
        setIsError(false);
        setLoader(true);
        const { results, total } = await dataPhotos(page, value);
        setTotalPages(page < Math.ceil(total / 15));
        return setPhotos(prevPhotos => [...prevPhotos, ...results]);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setLoader(false);
      }
    };
    responseData();
  }, [value, page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  const openModal = (imageUrl, description) => {
    setShowModal(true);
    setImageUrl(imageUrl);
    setImageDesc(description);
  };
  const closeModal = () => {
    return setShowModal(false);
  };
  return (
    <div className={css.wrapper}>
      {loader && <Loader />}
      <header className={css.header}>
        <div className={css.container}>
          <div className={css.header__search}>
            <SearchBar onSearch={inputQuery} />
          </div>
        </div>
      </header>
      {!loader && page < totalPages && <LoadMoreBtn loadMore={loadMore} />}
      {photos.length !== 0 && (
        <section className={css.section}>
          <div className={css.container}>
            <ImageGallery photos={photos} openModal={openModal} />
          <ImageModal
            isOpen={showModal}
            closeModal={closeModal}
            image={{ imageUrl, imageDesc }}
          />
            {!loader && totalPages && <LoadMoreBtn loadMore={loadMore} />}
          </div>
        </section>
      )}
      {isError && (
        <section className={css.section}>
          <div className={css.container}>
            <ErrorMessage />
          </div>
        </section>
      )}
    </div>
  );
}
