/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import MovieList from '../components/MovieList';
import MovieSearch from '../components/MovieSearch';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Home = ({ movie, movieRate, movieSearch, handleSearch }) => {
  return (
    <div className='bg-black'>
      <Banner />
      <div className="bg-black text-white py-10">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-xl font-bold mb-6 text-center ">Chào mừng đến với demo Movie App do Tuấn Anh khởi tạo</h2>
          <Link
            to="/booking/1234" // Đường dẫn đến trang đặt vé
            className="bg-red-600 text-white p-2 rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
          >
            Đặt vé xem phim
          </Link>
        </div>
      </div>
      {movieSearch.length > 0 ? (
        <MovieSearch title={'Kết quả tìm kiếm'} data={movieSearch} />
      ) : (
        <>
          <MovieList title={'Phim Hot'} data={movie} />
          <MovieList title={'Phim đề cử'} data={movieRate} />
        </>
      )}
       <Footer/>
    </div>
    
  );
};

export default Home;
