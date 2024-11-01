// Homepage.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import MovieCarousel from "../movie/MovieCarousel";
import MovieAutocomplete from "../shared/MovieAutocomplete";
import { fetchMovies, fetchMovieDetails } from "../../services/movie.service";
import { getAuthHeader } from "../../services/auth-header";
const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const headers = getAuthHeader();
  useEffect(() => {
    const loadMovies = async () => {
      try {
        const moviesData = await fetchMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movies:", error);
        navigate("/login");
      }
    };

    loadMovies();
  }, [navigate]);

  const handleMovieSelect = async (movieId) => {
    try {
      const movieData = await fetchMovieDetails(movieId);
      navigate(`/movie/${movieId}`, { state: { movie: movieData } });
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
        <MovieCarousel movies={movies} onMovieSelect={handleMovieSelect} headers={headers}/>
      </div>
    </div>
  );
};

export default Homepage;
