import React, { useEffect, useState } from "react";
import { fetchImages } from "./image-api.js";
import SearchBar from "./SearchBar/SearchBar.jsx";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import Loader from "./Loader/Loader.jsx";
import ErrorMessage from "./ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./ImageModal/ImageModal.jsx"; // Імпорт компоненту ImageModal

export default function App() {
  const [imgs, setImgs] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null); // Додали стан для вибраного зображення

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getImages = async () => {
      try {
        setError(false);
        setLoading(true);

        const newImgs = await fetchImages(query, page);
        setImgs((prevImages) => [...prevImages, ...newImgs]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, [query, page]);

  const handleSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImgs([]);
  };
  
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {imgs.length > 0 && (
        <ImageGallery items={imgs} onImageClick={openModal} /> // Передаємо функцію openModal як пропс
      )}

      {error && <ErrorMessage />}
      {loading && <Loader />}
      {imgs.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
      
      {/* Відображення модального вікна */}
      {selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={closeModal} // Передаємо функцію для закриття модального вікна
        />
      )}
    </div>
  );
}