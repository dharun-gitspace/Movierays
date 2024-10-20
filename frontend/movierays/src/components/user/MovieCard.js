import React from "react";

const MovieCard = ({ title }) => {
  return (
    <div className="w-48 bg-black rounded-lg shadow-lg">
      <div className="h-64 bg-gray-800 rounded-t-lg"></div> {/* Placeholder for thumbnail */}
      <div className="p-4">
        <h3 className="text-yellow-300 text-lg font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
