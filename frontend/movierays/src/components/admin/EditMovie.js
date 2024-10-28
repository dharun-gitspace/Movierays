import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditMovie = () => {
  const [movieSuggestions, setMovieSuggestions] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieName, setMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [imdbRating, setImdbRating] = useState("");
  const [duration, setDuration] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  // Fetch movie suggestions
  const fetchMovieSuggestions = async (query) => {
    try {
      const response = await fetch(`/api/movies/suggestions?query=${query}`);
      const data = await response.json();
      setMovieSuggestions(data);
    } catch (error) {
      console.error("Error fetching movie suggestions:", error);
    }
  };

  // Handle movie selection
  const handleMovieSelection = async (movieId) => {
    try {
      const response = await fetch(`/api/movies/${movieId}`);
      const movieData = await response.json();
      setSelectedMovie(movieData); // Store the full movie data
      setMovieName(movieData.name);
      setMovieDescription(movieData.description);
      setImdbRating(movieData.imdbRating);
      setDuration(movieData.duration);
      setReleaseDate(movieData.releaseDate);
      setGenre(movieData.genre);
      setCategory(movieData.category);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update movie logic here
    navigate("/"); // Navigate back to dashboard after submission
  };

  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-yellow-300 mb-4">Edit Movie</h2>
      {/* Search Bar */}
      <div className="mb-4">
        <label className="block mb-1 text-yellow-300">Search Movie</label>
        <input
          type="text"
          className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
          placeholder="Search for a movie to edit"
          value={movieName}
          onChange={(e) => {
            const value = e.target.value;
            setMovieName(value);
            fetchMovieSuggestions(value);
          }}
        />
        {movieSuggestions.length > 0 && (
          <div className="bg-black text-white border border-gray-700 rounded-md mt-2">
            {movieSuggestions.map((movie) => (
              <div
                key={movie.id}
                onClick={() => handleMovieSelection(movie.id)}
                className="p-2 cursor-pointer hover:bg-gray-800"
              >
                {movie.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Movie Edit Form */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Pre-fill fields */}
        <div>
          <label className="block mb-1 text-yellow-300">Movie Name</label>
          <input
            type="text"
            className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
            placeholder="Enter movie name"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-yellow-300">IMDb Rating</label>
          <input
            type="number"
            step="0.1"
            className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
            placeholder="Enter IMDb rating (1 - 10)"
            value={imdbRating}
            onChange={(e) => setImdbRating(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-yellow-300">Duration (in minutes)</label>
          <input
            type="number"
            className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
            placeholder="Enter duration in minutes"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-yellow-300">Release Date</label>
          <input
            type="date"
            className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </div>

        {/* Genre and Category */}
        <div>
          <label className="block mb-1 text-yellow-300">Genre</label>
          <input
            type="text"
            className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
            placeholder="Enter genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-yellow-300">Category</label>
          <input
            type="text"
            className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-yellow-300">Description</label>
          <textarea
            className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
            placeholder="Enter movie description"
            value={movieDescription}
            onChange={(e) => setMovieDescription(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button type="reset" className="bg-gray-700 px-4 py-2 rounded-md text-yellow-300">
            Clear
          </button>
          <button type="submit" className="bg-yellow-300 px-4 py-2 text-black rounded-md">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMovie;
