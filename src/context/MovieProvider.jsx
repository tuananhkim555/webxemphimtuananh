import { createContext, useState } from "react";
import PropTypes from "prop-types";
import YouTube from "react-youtube";
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Đảm bảo rằng #root là phần tử chứa ứng dụng của bạn

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1,
  },
};

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(null); // Đảm bảo bạn lưu thông tin người dùng ở đây


  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: Date.now() }]);
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const handleTrailer = async (id) => {
    setTrailerKey('');
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=vi`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const movieKey = await fetch(url, options);
      const data = await movieKey.json();

      // Thêm điều kiện để tránh lỗi khi không có trailer
      if (data.results && data.results.length > 0) {
        setTrailerKey(data.results[0].key);
        setModalIsOpen(true);
      } else {
        console.log("No trailers found");
        setModalIsOpen(false);
      }
    } catch (error) {
      console.log(error);
      setModalIsOpen(false);
    }
  };

  return (
    <MovieContext.Provider value={{ handleTrailer, movies, addMovie, deleteMovie, user, setUser }}>
      {children}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            zIndex: 9999,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        contentLabel="Trailer Modal"
      >
        <YouTube videoId={trailerKey} opts={opts} />
      </Modal>
    </MovieContext.Provider>
  );
};

MovieProvider.propTypes = {
  children: PropTypes.node,
};
