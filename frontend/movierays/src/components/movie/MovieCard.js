import React, { useEffect, useState } from "react";
import "../../styles/MovieCard.css";

const MovieCard = ({ movie, onMovieSelect, headers }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  useEffect(() => {
    const fetchThumbnail = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/movies/thumbnail/${movie.id}`,
          {
            headers, // Pass the headers
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const blob = await response.blob(); // Get the blob
        const url = URL.createObjectURL(blob); // Create a URL for the blob
        setThumbnailUrl(url); // Set the thumbnail URL
      } catch (error) {
        console.error("Error fetching thumbnail:", error);
      }
    };

    fetchThumbnail();
  }, [movie.id, headers]); // Re-run the effect if movie.id or headers change

  return (
    <div
      className="movie-card flex flex-col items-center bg-gray-800 text-white rounded-lg shadow-lg cursor-pointer"
      onClick={onMovieSelect}
    >
      <img
        src={thumbnailUrl} // Use the fetched thumbnail URL
        alt={`${movie.name} thumbnail`}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-2">
        <h3 className="text-center text-lg mt-2">{movie.name}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
