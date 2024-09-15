import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

// eslint-disable-next-line no-unused-vars
const isAdmin = (user) => {
  const adminEmails = ['tuananhkim555@gmail.com']; // Danh sách email của admin
  return adminEmails.includes(user.email);
};

// eslint-disable-next-line react/prop-types
const Login = ({ onLogin }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    googleLogout(); // Đăng xuất khỏi tài khoản Google
    localStorage.removeItem('authToken'); // Xóa token khỏi localStorage
    setUser(null);  // Xóa thông tin người dùng
    navigate('/login'); // Điều hướng về trang login sau khi đăng xuất
  };
  

  const handleLogin = (response) => {
    try {
      const decoded = jwtDecode(response.credential);
      setUser(decoded);
      localStorage.setItem('authToken', response.credential); 
      onLogin(response); 
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-900 text-white">
        <h2 className="text-3xl font-semibold pb-5">Trang Đăng Nhập</h2>
        {!user ? (
          <GoogleLogin
            onSuccess={handleLogin}
            onError={() => console.log("Đăng nhập không thành công")}
          />
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-lg">Xin chào, {user.name}!</p>
            <button
              onClick={handleLogout}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
            >
              Đăng Xuất
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Login;
