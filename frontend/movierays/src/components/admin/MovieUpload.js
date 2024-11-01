import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getAuthHeader } from "../../services/auth-header";

const MovieUpload = () => {
  const headers = getAuthHeader();
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
  const [movieExists, setMovieExists] = useState(false); // State to track if movie exists
  const [uploadMessage, setUploadMessage] = useState(""); // State for upload message
  const navigate = useNavigate();

  // Function to check if movie exists by name
  const checkMovieExists = async (name) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/movies/search/name`,
        { params: { name }, headers }
      );
      setMovieExists(response.data); // Set state based on response
    } catch (error) {
      console.error("Error checking movie existence:", error);
    }
  };

  // Handle movie name change
  const handleMovieNameChange = (e) => {
    setMovieName(e.target.value);
  };

  // Handle blur event to check for movie existence
  const handleMovieNameBlur = () => {
    if (movieName) {
      checkMovieExists(movieName);
    } else {
      setMovieExists(false); // Reset state if movie name is empty
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to send files and data
    const formData = new FormData();
    formData.append("thumbnail", thumbnail);
    formData.append("trailer", movieFile); // Assuming you meant to send the trailer file here
    formData.append(
      "movieDetails",
      JSON.stringify({
        name: movieName,
        description: movieDescription,
        imdbRating: imdbRating,
        category: category,
        genre: genre,
        releaseDate: releaseDate,
        duration: duration,
      })
    );

    try {
      const response = await axios.post(
        "http://localhost:8080/api/admin/movies",
        formData,
        {
          headers: {
            Authorization: `Bearer ${headers.Authorization.split(" ")[1]}`,
            "Content-Type": "multipart/form-data",

            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
          timeout: 15000,
        }
      );

      if (response.status === 200) {
        setUploadMessage("Movie uploaded successfully!"); // Set success message
        resetForm();

        // Navigate to the admin page after 3 seconds
        setTimeout(() => {
          navigate("/admin"); // Replace "/admin" with the correct admin page path
        }, 3000); // 3000 ms = 3 seconds
      }
    } catch (error) {
      console.error("Failed to upload movie:", error);
      setUploadMessage("Failed to upload movie. Please try again."); // Set error message
    }
  };
  // Function to reset form fields
  const resetForm = () => {
    setMovieName("");
    setMovieDescription("");
    setImdbRating("");
    setDuration("");
    setReleaseDate("");
    setThumbnail(null);
    setMovieFile(null);
    setGenre("");
    setCategory("");
    setMovieExists(false);
    setUploadMessage(""); // Reset message
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
            onChange={handleMovieNameChange} // Handle input change
            onBlur={handleMovieNameBlur} // Check existence on blur
          />
          {movieExists && (
            <p className="text-red-500 mt-2">This movie already exists!</p> // Message if movie exists
          )}
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
            disabled={movieExists} // Disable button if movie exists
          >
            Upload
          </button>
        </div>
      </form>
      {uploadMessage && <p className="mt-4 text-yellow-300">{uploadMessage}</p>}
    </div>
  );
};

export default MovieUpload;
