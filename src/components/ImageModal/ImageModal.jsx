import Modal from "react-modal";

Modal.setAppElement("#root"); // Встановлюємо кореневий елемент додатка

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
    >
      <div>
        <img src={image.url} alt={image.alt} />
        <button onClick={onClose}>Close Modal</button>
      </div>
    </Modal>
  );
};

export default ImageModal;