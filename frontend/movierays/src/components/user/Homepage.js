// Homepage.js
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // Import Navbar
import MovieCarousel from "../movie/MovieCarousel"; // Import MovieCarousel
import MovieAutocomplete from "../shared/MovieAutocomplete";
const genres = ["Action", "Comedy", "Drama", "Horror", "Romance"]; // Sample genres

const Homepage = () => {
  // Sample movie titles for each genre
  const sampleMovies = {
    Action: [
      "Action Movie 1",
      "Action Movie 2",
      "Action Movie 3",
      "Action Movie 4",
    ],
    Comedy: [
      "Comedy Movie 1",
      "Comedy Movie 2",
      "Comedy Movie 3",
      "Comedy Movie 4",
    ],
    Drama: ["Drama Movie 1", "Drama Movie 2", "Drama Movie 3", "Drama Movie 4"],
    Horror: [
      "Horror Movie 1",
      "Horror Movie 2",
      "Horror Movie 3",
      "Horror Movie 4",
    ],
    Romance: [
      "Romance Movie 1",
      "Romance Movie 2",
      "Romance Movie 3",
      "Romance Movie 4",
    ],
  };
  
  const navigate = useNavigate();

  const handleMovieSelect = async (movieId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/movies/${movieId}`);
      navigate(`/movie/${movieId}`, { state: { movie: response.data } });
    } catch (error) {
      console.error("Error fetching movie details", error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      {/* Search Bar with Autocomplete */}
      <div className="container mx-auto px-4 py-20">
        <MovieAutocomplete onMovieSelect={handleMovieSelect} />
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
