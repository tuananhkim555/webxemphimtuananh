import { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieProvider';

const AdminPage = () => {
  const { movies, addMovie, deleteMovie } = useContext(MovieContext);
  const [newMovie, setNewMovie] = useState({
    title: '',
    poster_path: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: value
    });
  };

  const handleAddMovie = () => {
    if (newMovie.title && newMovie.poster_path) {
      try {
        addMovie(newMovie);
        setNewMovie({ title: '', poster_path: '' });
        setError('');
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setError('Đã xảy ra lỗi khi thêm phim');
      }
    } else {
      setError('Vui lòng điền đầy đủ thông tin');
    }
  };

  const handleDeleteMovie = (id) => {
    try {
      deleteMovie(id);
    } catch (error) {
      console.error('Đã xảy ra lỗi khi xóa phim:', error);
    }
  };

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl mb-6">Quản lý Phim</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl mb-4">Thêm Phim Mới</h2>
        <input
          type="text"
          name="title"
          value={newMovie.title}
          onChange={handleInputChange}
          placeholder="Tên phim"
          className="p-2 mb-4 text-gray-900 rounded"
        />
        <input
          type="text"
          name="poster_path"
          value={newMovie.poster_path}
          onChange={handleInputChange}
          placeholder="Đường dẫn ảnh poster"
          className="p-2 mb-4 text-gray-900 rounded"
        />
        <button
          onClick={handleAddMovie}
          className="p-2 bg-blue-600 text-white rounded-lg"
        >
          Thêm Phim
        </button>
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>

      <div>
        <h2 className="text-2xl mb-4">Danh Sách Phim</h2>
        {movies.length > 0 ? (
          <ul>
            {movies.map(movie => (
              <li key={movie.id} className="flex justify-between items-center mb-4 p-2 bg-gray-800 rounded-lg">
                <span>{movie.title}</span>
                <button
                  onClick={() => handleDeleteMovie(movie.id)}
                  className="p-1 bg-red-600 text-white rounded-lg"
                >
                  Xóa
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Danh sách phim trống</p>
        )}
      </div>
    </div>
  );
};

export default AdminPage;