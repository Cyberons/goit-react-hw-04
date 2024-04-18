import Modal from 'react-modal';

const ImageModal = ({ isOpen, onRequestClose, imageSrc, imageAlt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      ariaHideApp={false}
    >
      <button onClick={onRequestClose} style={{ position: 'absolute', top: '10px', right: '10px' }}>Close</button>
      <img src={imageSrc} alt={imageAlt} style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </Modal>
  );
};

export default ImageModal;