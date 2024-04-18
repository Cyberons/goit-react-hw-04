import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';
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
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.unsplash.com/photos?page=${page}&per_page=10&client_id=your_access_key`);
        const data = response.data;
        setImages(prevImages => [...prevImages, ...data]);
        setTotalPages(response.headers['x-total-pages']);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
        setError('Failed to fetch images. Please try again later.');
      }
    };

    fetchImages();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    setPage(1); // Reset page number when performing a new search
  };

  return (
    <div>
      <h1>Image Gallery</h1>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <p>Loading...</p>}
      {!loading && images.length > 0 && <LoadMoreBtn onLoadMore={handleLoadMore} hasMore={page < totalPages} />}
      {selectedImage && <ImageModal isOpen={!!selectedImage} onRequestClose={handleCloseModal} imageSrc={selectedImage.urls.regular} imageAlt={selectedImage.alt_description} />}
    </div>
  );
};

export default App;