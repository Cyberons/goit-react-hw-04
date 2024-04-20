import { useEffect, useState } from "react";
import { fetchImages } from "./image-api";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./SearchBar/SearchBar.jsx";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import Loader from "./Loader/Loader.jsx";
import ErrorMessage from "./ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./ImageModal/ImageModal.jsx";

export default function App() {
  const [imgs, setImgs] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [description, setDescription] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getImages = async () => {
      try {
        setError(false);
        setLoading(true);

        const newImgs = await fetchImages(page, query);
        console.log(newImgs);
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
    setPage(page + 5);
  };

  const openModal = (bigImg, alt) => {
    setSelectedImage(bigImg);
    setDescription(alt);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setDescription(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <Toaster />
      {imgs.length > 0 && (
        <ImageGallery items={imgs}  />
      )}
      {error ? (
        <ErrorMessage />
      ) : (
        <>
          {imgs.length > 0 && (
            <ImageGallery items={imgs} openModal={openModal} />
          )}
          {loading && <Loader />}
          {imgs.length > 0 && !loading && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}
        </>
      )}
      <ImageModal
        isOpen={modalIsOpen}
        modalImg={selectedImage}
        alt={description}
        closeModal={closeModal}
      />
    </div>
  );
}