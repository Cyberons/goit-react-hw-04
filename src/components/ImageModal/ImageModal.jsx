import Modal from "react-modal";

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <img src={imageUrl} alt="Full size" />
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default ImageModal;