import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';
import { fetchImages } from "./image-api.js";
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import ImageModal from './ImageModal/ImageModal.jsx';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn.jsx';
import ErrorMessage from './ErrorMessage/ErrorMessage.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      return;
    }
    const getImages = async () => {
      try {
        setError(false);
        setLoading(true);

        const newImgs = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...newImgs]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery items={images} />}
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <p>Loading...</p>}
      {!loading && images.length > 0 && <LoadMoreBtn onLoadMore={handleLoadMore} hasMore={page < totalPages} />}
      {selectedImage && <ImageModal isOpen={!!selectedImage} onRequestClose={handleCloseModal} imageSrc={selectedImage.urls.regular} imageAlt={selectedImage.alt_description} />}
    </div>
  );
};

export default App;