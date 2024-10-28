// MovieCarousel.js
import React, { useState } from "react";
import MovieCard from "./MovieCard";
const MovieCarousel = ({ genre, movies, onMovieSelect, headers}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 220; // Width of the card including margin
  const cardMargin = 16; // Margin between cards

  const handleNext = () => {
    if (currentIndex < movies.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold text-white mb-4">{genre}</h2>
      <div className="flex items-center">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-0 z-10 bg-gray-800 text-white p-2 rounded-md"
        >
          &lt;
        </button>
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * (cardWidth + cardMargin)}px)` }}
          >
            {movies.map((movie) => (
              <MovieCard 
                key={movie.id}
                movie={movie}
                onMovieSelect={() => onMovieSelect(movie.id)}
                headers = {headers}
              />
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          disabled={currentIndex >= movies.length - 1}
          className="absolute right-0 z-10 bg-gray-800 text-white p-2 rounded-md"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MovieCarousel;
