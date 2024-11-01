// MovieDetail.js
import React, { useState, useEffect } from "react";
import MoviePlayer from "./MoviePlayer";
import { fetchThumbnail } from "../../services/movie.service";

const MovieDetail = ({ movie }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    const loadThumbnail = async () => {
      try {
        const imageUrl = await fetchThumbnail(movie.id);
        setThumbnailUrl(imageUrl);
      } catch (error) {
        console.error("Error fetching thumbnail:", error);
      }
    };

    if (movie.id) {
      loadThumbnail();
    }
  }, [movie]);

  const handleWatchNow = () => {
    setShowPlayer(true);
  };

  return (
    <div className="container mx-auto px-6 py-8 bg-gray-900 text-white rounded-lg shadow-lg mt-2">
      <h2 className="text-3xl px-2 font-bold mb-4">{movie.name}</h2>

      <div className="flex flex-col md:flex-row items-start">
        <img
          src={thumbnailUrl}
          alt={`${movie.name} thumbnail`}
          className="w-full md:w-1/3 rounded-lg shadow-md mb-4 md:mb-0"
        />

        <div className="md:ml-6 w-full md:w-2/3">
          <p className="text-lg mb-2">
            <span className="font-semibold">Description:</span>{" "}
            {movie.description}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">IMDB Rating:</span>{" "}
            {movie.imdbRating}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Category:</span> {movie.category}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Genre:</span> {movie.genre}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Release Date:</span>{" "}
            {movie.releaseDate}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Duration:</span> {movie.duration}{" "}
            mins
          </p>

          <button
            onClick={handleWatchNow}
            className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-200"
          >
            Watch Now
          </button>

          {/* Conditionally render MoviePlayer */}
          {showPlayer && (
            <div className="flex justify-center items-center mr-96">
              <MoviePlayer movieId={movie.id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
