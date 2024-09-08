import Modal from 'react-modal';
import { IoClose } from 'react-icons/io5';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');
export default function ImageModal({
  isOpen,
  closeModal,
  image: { imageUrl, imageDesc },
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={css.modal}
      overlayClassName={css.overlay}
      contentLabel="Image Modal">
      <div className={css.modal__content}>
        <button type="button" className={css.close__modal} onClick={closeModal}>
          <IoClose className={css.icon} />
        </button>
        <img src={imageUrl} alt={imageDesc} className={css.modal__image} />
      </div>
    </Modal>
  );
}
