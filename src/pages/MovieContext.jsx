/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { MovieContext } from '../context/MovieProvider';

// eslint-disable-next-line react/prop-types
const MovieProvider = ({ children }) => {
  const [apiMovies, setApiMovies] = useState([]);
  const [customMovies, setCustomMovies] = useState([]);

  // ... các hàm xử lý API movies

  const addCustomMovie = (movie) => {
    setCustomMovies(prevMovies => [...prevMovies, { ...movie, id: Date.now() }]);
  };

  const deleteCustomMovie = (id) => {
    setCustomMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
  };

  return (
    <MovieContext.Provider value={{
      apiMovies,
      customMovies,
      addCustomMovie,
      deleteCustomMovie,
      // ... các hàm khác
    }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
