import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminPage from './pages/AdminPage';
import SeatBookingPage from './pages/SeatBookingPage';
import PrivateRoute from './components/PrivateRoute'; // Đảm bảo đường dẫn đúng
import { MovieProvider } from './context/MovieProvider';
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

function App() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);
  const [user, setUser] = useState(null); // Trạng thái người dùng

  // Hàm để tải thông tin phim
  const handleSearch = async (searchVal) => {
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=vi&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setMovieSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  // Lấy thông tin phim từ API khi ứng dụng tải
  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url1 = 'https://api.themoviedb.org/3/movie/popular?language=vi&page=1';
      const url2 = 'https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1';

      const [res1, res2] = await Promise.all([fetch(url1, options), fetch(url2, options)]);
      const data1 = await res1.json();
      const data2 = await res2.json();

      setMovie(data1.results);
      setMovieRate(data2.results);
    };

    fetchMovie();
  }, []);

  // Khôi phục trạng thái đăng nhập từ `localStorage` khi trang tải lại
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        const decoded = jwtDecode(token); // Giải mã token
        setUser(decoded); // Lưu thông tin người dùng vào trạng thái
      } catch (error) {
        console.error("Lỗi khi giải mã token:", error);
      }
    }
  }, []);

  // Hàm để đăng xuất người dùng
  const handleLogout = () => {
    setUser(null); // Xóa thông tin người dùng khỏi trạng thái
    localStorage.removeItem('authToken'); // Xóa token khỏi `localStorage`
  };

  return (
    <Router>
      <MovieProvider>
        <div className='bg-black pb-10 min-h-screen flex flex-col'>
          <Header onSearch={handleSearch} user={user} onLogout={handleLogout} />
          <main className="flex-grow">
            <Routes>
              <Route 
                path="/" 
                element={
                  <Home 
                    movie={movie} 
                    movieRate={movieRate} 
                    movieSearch={movieSearch} 
                    handleSearch={handleSearch} 
                  />
                } 
              />
              <Route 
                path="/login" 
                element={<Login onLogin={(response) => {
                  try {
                    const decoded = jwtDecode(response.credential);
                    setUser(decoded);
                    localStorage.setItem('authToken', response.credential); // Lưu token vào `localStorage`
                  } catch (error) {
                    console.error("Lỗi khi đăng nhập:", error);
                  }
                }} />} 
              />
              <Route 
                path="/admin" 
                element={
                  <PrivateRoute>
                    <AdminPage />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/booking/:MaLichChieu" 
                element={<SeatBookingPage />} 
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </MovieProvider>
    </Router>
  );
}

export default App;
