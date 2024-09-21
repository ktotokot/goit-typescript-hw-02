import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import fetchImages from "./services/articles-api";
import { Toaster } from "react-hot-toast";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const { results, total_pages } = await fetchImages(query, page);
        if (!results.length) {
          return setIsEmpty(true);
        }
        setImages((prevImages) => [...prevImages, ...results]);
        setIsVisible(page < total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, query]);

  const handleSearch = (value) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(null);
    setIsEmpty(false);
    setIsVisible(false);
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (modalUrl, modalAlt) => {
    setShowModal(true);
    setModalUrl(modalUrl);
    setModalAlt(modalAlt);
  };
  
  const closeModal = () => {
    setShowModal(false);
    setModalUrl("");
    setModalAlt("");
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && (
        <ErrorMessage message="Oops, something went wrong. Try again later" />
      )}
      {isEmpty && <ErrorMessage message="Oops, we don't found" />}
      {images.length > 0 && (
        <ImageGallery items={images} openModal={openModal} />
      )}
      {isVisible && <LoadMoreBtn onLoadMore={onLoadMore} />}
      <Toaster position="top-right" />
      <ImageModal
        modalIsOpen={showModal}
        closeModal={closeModal}
        modalUrl={modalUrl}
        modalAlt={modalAlt}
      />
    </div>
  );
};

export default App;
