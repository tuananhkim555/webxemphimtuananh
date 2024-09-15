/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const MovieDetails = ({ showDetails }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-4">{showDetails.name}</h1>
      <p className="text-xl mb-2">Ngày Chiếu: {showDetails.date}</p>
      <p className="text-xl mb-4">Giờ Chiếu: {showDetails.time}</p>
      <p className="text-xl mb-4">Loại Vé: {showDetails.type}</p>
    </div>
  );
};

export default MovieDetails;
