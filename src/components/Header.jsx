import PropTypes from "prop-types";
import LoginIcon from "../assets/user.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ onSearch, user, onLogout }) => {
  const [textSearch, setTextSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleUserClick = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="p-4 bg-black">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-[24px] md:text-[30px] uppercase text-red-600 font-bold">T.ANH</h1>
          {!isMobile && (
            <nav className="flex items-center space-x-4">
              <Link to="/" className="text-white hover:text-red-500">Trang chủ</Link>
              <a href="#" className="text-white hover:text-red-500">Thông tin</a>
              <a href="#" className="text-white hover:text-red-500">Liên hệ</a>
            </nav>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Tìm kiếm phim ở đây..."
            className="p-2 text-gray-600 rounded-lg w-40 md:w-64"
            onChange={(e) => setTextSearch(e.target.value)}
            value={textSearch}
          />
          <button className="p-2 text-white bg-red-600 rounded-lg hover:bg-red-700" onClick={() => onSearch(textSearch)}>
            Tìm kiếm
          </button>
          {user ? (
            <div className="relative">
              <button
                onClick={handleUserClick}
                className="flex items-center p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
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
              <img src={LoginIcon} alt="Login Icon" className="w-8 h-8 bg-white rounded-xl p-1 cursor-pointer hover:bg-gray-200" />
            </Link>
          )}
        </div>
        {isMobile && (
          <button onClick={toggleNav} className="text-white text-2xl z-50">
            ☰
          </button>
        )}
      </div>
      
      {isMobile && (
        <div className={`fixed top-0 left-0 h-full w-64 bg-black transform ${navOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
          <nav className="flex flex-col items-start space-y-4 p-4 mt-16">
            <Link to="/" className="text-white hover:text-red-500">Trang chủ</Link>
            <a href="#" className="text-white hover:text-red-500">Thông tin</a>
            <a href="#" className="text-white hover:text-red-500">Liên hệ</a>
          </nav>
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
  user: PropTypes.object,
  onLogout: PropTypes.func.isRequired,
};

export default Header;
