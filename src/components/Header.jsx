import PropTypes from "prop-types";
import LoginIcon from "../assets/user.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onSearch, user, onLogout }) => {
  const [textSearch, setTextSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleUserClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="p-4 bg-black flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-[30px] uppercase text-red-600 font-bold">T.ANH</h1>
        <nav className="flex items-center space-x-4">
          <Link to="/" className="text-white">Trang chủ</Link>
          <a href="#" className="text-white">Thông tin</a>
          <a href="#" className="text-white">Liên hệ</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Tìm kiếm phim ở đây..."
          className="p-3 text-gray-600 rounded-lg"
          onChange={(e) => setTextSearch(e.target.value)}
          value={textSearch}
        />
        <button className="p-2 text-white bg-red-600 rounded-lg" onClick={() => onSearch(textSearch)}>
          Tìm kiếm
        </button>
        {user ? (
          <div className="relative">
            <button
              onClick={handleUserClick}
              className="flex items-center p-2 text-white bg-blue-600 rounded-lg"
            >
              {user.name}
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg">
                <button
                  onClick={onLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-700 z-40"
                >
                  Đăng Xuất
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <img src={LoginIcon} alt="Login Icon" className="w-8 h-8 bg-white rounded-xl p-1 cursor-pointer" />
          </Link>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
  user: PropTypes.object,
  onLogout: PropTypes.func.isRequired,
};

export default Header;
