import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-white p-20 text-center w-full mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo và thông tin liên hệ */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold text-red-600">ANH TUAN</h1>
            <p className="text-gray-400 mt-2">Địa chỉ: 123 Đường Example, Thành phố ABC</p>
            <p className="text-gray-400">Email: info@example.com</p>
          </div>

          {/* Liên kết */}
          <div className="flex flex-col md:flex-row md:space-x-8">
            <a href="#" className="text-gray-300 hover:text-white mb-2 md:mb-0">Trang chủ</a>
            <a href="#" className="text-gray-300 hover:text-white mb-2 md:mb-0">Giới thiệu</a>
            <a href="#" className="text-gray-300 hover:text-white mb-2 md:mb-0">Dịch vụ</a>
            <a href="#" className="text-gray-300 hover:text-white">Liên hệ</a>
          </div>

          {/* Mạng xã hội */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
        
        {/* Thông tin bản quyền */}
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ANH TUAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
