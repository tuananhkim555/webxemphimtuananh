/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const BookingSummary = ({ selectedSeats, totalCost, handleBooking, handleReset }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Chi tiết đặt vé</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Ghế đã chọn:</h3>
        <div className="flex flex-wrap gap-2">
          {selectedSeats.map(seat => (
            <span key={seat} className="p-2 bg-yellow-500 text-black rounded-lg">{seat}</span>
          ))}
        </div>
      </div>
      <p className="text-xl font-semibold mb-4">Tổng tiền: {totalCost.toLocaleString()} VND</p>
      <button
        onClick={handleBooking}
        className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Đặt vé
      </button>
      <button
        onClick={handleReset}
        className="w-full p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 mt-4"
      >
        Đặt lại
      </button>
    </div>
  );
};

export default BookingSummary;
