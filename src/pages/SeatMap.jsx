/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const SeatMap = ({ seats, selectedSeats, handleSeatClick }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Chọn Ghế Ngồi</h2>
      <div className="grid grid-cols-10 gap-2">
        {seats.map((seat) => (
          <div
            key={seat.maGhe}
            onClick={() => handleSeatClick(seat)}
            className={`p-4 text-center rounded-lg cursor-pointer 
              ${seat.daDat ? 'bg-gray-600 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'} 
              ${selectedSeats.includes(seat.maGhe) ? 'border-2 border-yellow-500' : ''}`}
          >
            {seat.tenGhe}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatMap;
