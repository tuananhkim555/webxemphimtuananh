import { useState } from 'react';
import Footer from '../components/Footer';

// Component chọn ghế
const SeatBookingPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    fullName: ''
  });

  // Tạo 100 ghế, mỗi hàng có 10 ghế (A1-A10, B1-B10, v.v...)
  const createSeats = () => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']; // 10 hàng
    const seats = [];
    rows.forEach((row, rowIndex) => {
      for (let i = 1; i <= 10; i++) { // 10 ghế mỗi hàng
        seats.push({
          id: rowIndex * 10 + i,
          name: `${row}${i}`,
          booked: Math.random() < 0.3, // Giả sử 30% ghế đã được đặt
        });
      }
    });
    return seats;
  };

  const seats = createSeats();

  const handleSeatClick = (seat) => {
    if (seat.booked) return; // Nếu ghế đã đặt thì không cho phép chọn
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seat.name)) {
        return prevSelectedSeats.filter(s => s !== seat.name); // Bỏ ghế nếu đã chọn
      } else {
        return [...prevSelectedSeats, seat.name]; // Chọn ghế
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Thông tin vé:', {
      selectedSeats,
      ...formData
    });
    alert(`Đặt vé thành công cho các ghế: ${selectedSeats.join(', ')}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          {/* Thông tin phim */}
          <h1 className="text-3xl font-bold mb-4">Thông tin phim</h1>
          <div className="mb-4">
            <label className="block text-xl">Họ tên:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-lg mt-2"
              placeholder="Nhập họ tên của bạn"
            />
          </div>
          <div className="mb-4">
            <label className="block text-xl">Tên phim:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-lg mt-2"
              placeholder="Nhập tên phim"
            />
          </div>

          <div className="mb-4">
            <label className="block text-xl">Ngày chiếu:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-lg mt-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-xl">Giờ chiếu:</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded-lg mt-2"
            />
          </div>

          {/* Chọn ghế */}
          <h2 className="text-xl font-semibold mb-4">Chọn ghế</h2>
          <div className="grid grid-cols-10 gap-2 mb-4 text-sm">
            {seats.map((seat) => (
              <div
                key={seat.id}
                onClick={() => handleSeatClick(seat)}
                className={`p-2 text-center rounded-lg cursor-pointer ${
                  seat.booked
                    ? 'bg-red-500 cursor-not-allowed'
                    : selectedSeats.includes(seat.name)
                    ? 'bg-red-500' // Chọn ghế thành màu đỏ
                    : 'bg-green-500 hover:bg-green-600'
                }`}
              >
                {seat.name}
              </div>
            ))}
          </div>

          {/* Hiển thị các ghế đã chọn */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Ghế đã chọn:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedSeats.map(seat => (
                <span key={seat} className="p-2 bg-red-500 text-white rounded-lg">{seat}</span>
              ))}
            </div>
          </div>

          {/* Nút đặt vé */}
          <button
            onClick={handleSubmit}
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Đặt vé
          </button>
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
};

export default SeatBookingPage;
