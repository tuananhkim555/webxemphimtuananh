import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { MovieContext } from "../context/MovieProvider";
import Modal from "react-modal";

Modal.setAppElement('#root');

const MovieSearch = ({ title, data }) => {
  const { handleTrailer } = useContext(MovieContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase text-xl mb-4">{title}</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className="w-[200px] h-[300px] relative group"
              onClick={() => openModal(item)}
            >
              <div className="group-hover:scale-110 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                  alt={item.title || item.original_title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-2">
                  <p className="uppercase text-md">
                    {item.title || "Unknown Title"}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>

      {selectedMovie && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Movie Trailer"
          className="modal"
          overlayClassName="overlay"
        >
          <button onClick={closeModal} className="absolute top-2 right-2 text-white">
            X
          </button>
          <h2 className="text-2xl mb-4">{selectedMovie.title || "Unknown Title"}</h2>
          <div className="relative w-full h-64">
            <iframe
              src={`https://www.youtube.com/embed/${handleTrailer(selectedMovie.id)}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

MovieSearch.propTypes = {
  title: PropTypes.string.isRequired,  // Thêm `isRequired` để bắt buộc
  data: PropTypes.array.isRequired,   // Thêm `isRequired` để bắt buộc
};

export default MovieSearch;

