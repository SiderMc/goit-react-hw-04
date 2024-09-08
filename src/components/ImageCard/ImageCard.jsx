import css from './ImageCard.module.css';
export default function ImageCard({
  card: { small, regular, alt_description },
  openModal,
}) {
  const handleModal = () => {
    openModal(regular, alt_description);
  };
  return (
    <img
      onClick={handleModal}
      loading="lazy"
      src={small}
      alt={alt_description}
      className={css.gallery__list_image}
    />
  );
}
