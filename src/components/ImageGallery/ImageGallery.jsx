const ImageGallery = ({ images }) => {
  if (images.length === 0) {
    // Повертаємо null, якщо немає завантажених зображень
    return null;
  }

  return (
    <ul>
      {images.map((image, index) => (
        <li key={index}>
          <div>
            <img src={image.src} alt={image.alt} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;