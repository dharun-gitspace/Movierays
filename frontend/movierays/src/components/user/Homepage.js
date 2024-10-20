// Homepage.js
import React from "react";
import Navbar from "./Navbar"; // Import Navbar
import MovieCarousel from "../movie/MovieCarousel"; // Import MovieCarousel

const genres = ["Action", "Comedy", "Drama", "Horror", "Romance"]; // Sample genres

const Homepage = () => {
  // Sample movie titles for each genre
  const sampleMovies = {
    Action: ["Action Movie 1", "Action Movie 2", "Action Movie 3", "Action Movie 4"],
    Comedy: ["Comedy Movie 1", "Comedy Movie 2", "Comedy Movie 3", "Comedy Movie 4"],
    Drama: ["Drama Movie 1", "Drama Movie 2", "Drama Movie 3", "Drama Movie 4"],
    Horror: ["Horror Movie 1", "Horror Movie 2", "Horror Movie 3", "Horror Movie 4"],
    Romance: ["Romance Movie 1", "Romance Movie 2", "Romance Movie 3", "Romance Movie 4"],
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Search Bar */}
      <div className="container mx-auto px-4 py-6">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="w-full rounded-md p-4 text-black text-lg shadow-md"
        />
      </div>

      {/* Movies Section */}
      <div className="container mx-auto px-4">
        {genres.map((genre) => (
          <div key={genre} className="py-6">
            <MovieCarousel genre={genre} movies={sampleMovies[genre]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
