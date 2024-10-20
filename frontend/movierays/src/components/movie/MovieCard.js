// MovieCard.js
import React from "react";
import "../../styles/MovieCard.css";
const MovieCard = ({ title }) => {
  return (
    <div className="movie-card flex items-center justify-center bg-gray-800 text-white rounded-lg shadow-lg">
      <h3 className="text-lg">{title}</h3>
    </div>
  );
};

export default MovieCard;
