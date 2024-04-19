import { useEffect, useState } from "react";
import { fetchImages } from "./image-api";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

export default function App() {
  const [imgs, setImgs] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

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
    toast.error("Nothing found! Try again!");
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <Toaster />
      {imgs.length > 0 && <ImageGallery items={imgs} />}

      {error && <ErrorMessage />}
      {loading && <Loader />}
      {imgs.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
    </div>
  );
}