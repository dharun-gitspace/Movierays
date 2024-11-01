// movie.service.js
import axios from "axios";
import { getAuthHeader } from "./auth-header"; // Adjust path as needed

// Fetch all movies
export const fetchMovies = async () => {
  const headers = getAuthHeader();
  if (!headers) throw new Error("Unauthorized");

  const response = await axios.get("http://localhost:8080/api/movies", {
    headers,
  });
  return response.data;
};

// Fetch movie details by ID
export const fetchMovieDetails = async (movieId) => {
  const headers = getAuthHeader();
  if (!headers) throw new Error("Unauthorized");

  const response = await axios.get(
    `http://localhost:8080/api/movies/${movieId}`,
    {
      headers,
    }
  );
  return response.data;
};

export const fetchThumbnail = async (movieId) => {
  const headers = getAuthHeader();
  if (!headers) throw new Error("Unauthorized");

  const response = await axios.get(
    `http://localhost:8080/api/movies/thumbnail/${movieId}`,
    { headers, responseType: "blob" }
  );
  return URL.createObjectURL(response.data);
};

export const fetchMovieVideo = async (movieId) => {
  const headers = getAuthHeader();
  if (!headers) throw new Error("Unauthorized");

  const response = await axios.get(
    `http://localhost:8080/api/movies/watch/${movieId}`,
    { headers, responseType: "blob" }
  );
  return URL.createObjectURL(response.data);
};

const fetchSuggestions = async (query) => {
  const headers = getAuthHeader(); // Get auth header for API requests
  try {
    const response = await axios.get(`http://localhost:8080/api/movies/search`, {
      params: { query },
      headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie suggestions:", error);
    throw error; // Propagate the error
  }
};

export { fetchSuggestions };
