import React from "react";
import Navbar from "./Navbar"; // Import Navbar
import MovieCard from "./MovieCard"; // Card component for movie display

const genres = ["Action", "Comedy", "Drama", "Horror", "Romance"]; // Sample genres

const Homepage = () => {
  return (
    <div className="min-h-screen bg-yellow-300">
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
      {genres.map((genre) => (
        <div key={genre} className="container mx-auto px-4 py-6">
          <h2 className="text-2xl font-bold text-black mb-4">{genre}</h2>
          <div className="flex gap-4 overflow-x-scroll">
            {/* Sample Movie Cards */}
            <MovieCard title={`${genre} Movie 1`} />
            <MovieCard title={`${genre} Movie 2`} />
            <MovieCard title={`${genre} Movie 3`} />
            <MovieCard title={`${genre} Movie 4`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
