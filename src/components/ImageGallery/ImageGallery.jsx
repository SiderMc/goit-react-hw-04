import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ photos, openModal }) {
  return (
    <div className={css.image__gallery}>
      <ul className={css.gallery__list}>
        {photos.map(({ urls: { small, regular }, alt_description, id }) => (
          <li className={css.gallery__list_item} key={id}>
            <ImageCard
              card={{ small, regular, alt_description }}
              openModal={openModal}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
