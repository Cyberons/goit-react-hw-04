
import ImageCard from './ImageCard'; // Імпортуємо компонент ImageCard

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map((image, index) => (
        <li key={index}>
          <ImageCard src={image.urls.small} alt={image.alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;