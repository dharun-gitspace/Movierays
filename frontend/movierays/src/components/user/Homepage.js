// Homepage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import MovieCarousel from "../movie/MovieCarousel";
import MovieAutocomplete from "../shared/MovieAutocomplete";
import { getAuthHeader } from "../../services/auth-header";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const headers = getAuthHeader(); // Get auth header for API requests

  useEffect(() => {
    // Check if the user is logged in
    if (!headers) {
      navigate("/login"); // Redirect to login page if not authenticated
      return;
    }

    // Fetch movies from backend
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/movies", {
          headers,
        }); // Fetches all movies
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [headers, navigate]); // Added headers and navigate as dependencies

  const handleMovieSelect = async (movieId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/movies/${movieId}`,
        { headers }
      );
      navigate(`/movie/${movieId}`, { state: { movie: response.data } });
    } catch (error) {
      console.error("Error fetching movie details", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <MovieAutocomplete onMovieSelect={handleMovieSelect} />
      </div>

      <div className="container mx-auto px-4">
        <MovieCarousel movies={movies} onMovieSelect={handleMovieSelect} headers={headers} />
      </div>
    </div>
  );
};

export default Homepage;
