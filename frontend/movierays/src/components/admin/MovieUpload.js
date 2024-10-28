import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieUpload = () => {
  const [genres] = useState(["Action", "Comedy", "Drama", "Sci-Fi"]);
  const [categories] = useState([
    "Rated G",
    "Rated PG",
    "Rated PG-13",
    "Rated R",
    "Rated NC-17",
  ]);
  const [movieName, setMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [imdbRating, setImdbRating] = useState("");
  const [duration, setDuration] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [movieFile, setMovieFile] = useState(null);
  const [genre, setGenre] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate("/"); // Navigate back to dashboard after submission
  };

  // Restrict IMDb Rating to values between 1 and 10 with floating numbers
  const handleImdbRatingChange = (e) => {
    const value = parseFloat(e.target.value);
    if (value >= 1 && value <= 10) setImdbRating(value);
  };

  // Ensure duration is positive and in minutes
  const handleDurationChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) setDuration(value);
  };

  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-yellow-300 mb-4">
        Upload New Movie
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Movie Name */}
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
        {/* Description */}
        <div>
          <label className="block mb-1 text-yellow-300">Description</label>
          <textarea
            className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
            placeholder="Enter movie description"
            value={movieDescription}
            onChange={(e) => setMovieDescription(e.target.value)}
          />
        </div>
        {/* IMDb Rating */}
        <div>
          <label className="block mb-1 text-yellow-300">IMDb Rating</label>
          <input
            type="number"
            step="0.1"
            className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
            placeholder="Enter IMDb rating (1 - 10)"
            value={imdbRating}
            onChange={handleImdbRatingChange}
          />
        </div>
        {/* Category Select */}
        <div>
          <label className="block mb-1 text-yellow-300">Category</label>
          <select
            className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.map((categoryOption) => (
              <option key={categoryOption} value={categoryOption}>
                {categoryOption}
              </option>
            ))}
          </select>
        </div>
        {/* Genre Select */}
        <div>
          <label className="block mb-1 text-yellow-300">Genre</label>
          <select
            className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">Select Genre</option>
            {genres.map((genreOption) => (
              <option key={genreOption} value={genreOption}>
                {genreOption}
              </option>
            ))}
          </select>
        </div>
        {/* Thumbnail File Upload */}
        <div>
          <label className="block mb-1 text-yellow-300">Thumbnail Image</label>
          <input
            type="file"
            accept="image/*"
            className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
            onChange={(e) => setThumbnail(e.target.files[0])}
          />
        </div>
        {/* Movie File Upload */}
        <div>
          <label className="block mb-1 text-yellow-300">Movie File</label>
          <input
            type="file"
            accept="video/*"
            className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
            onChange={(e) => setMovieFile(e.target.files[0])}
          />
        </div>
        {/* Release Date */}
        <div>
          <label className="block mb-1 text-yellow-300">Release Date</label>
          <input
            type="date"
            className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </div>
        {/* Duration in Minutes */}
        <div>
          <label className="block mb-1 text-yellow-300">
            Duration (in minutes)
          </label>
          <input
            type="number"
            className="w-full border border-gray-700 p-2 rounded-md bg-black text-white"
            placeholder="Enter duration in minutes"
            value={duration}
            onChange={handleDurationChange}
          />
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            type="reset"
            className="bg-gray-700 px-4 py-2 rounded-md text-yellow-300"
          >
            Clear
          </button>
          <button
            type="submit"
            className="bg-yellow-300 px-4 py-2 text-black rounded-md"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieUpload;
