// MovieAutocomplete.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieAutocomplete = ({ onMovieSelect }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length > 1) {
      const fetchSuggestions = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/movies/search`,
            {
              params: { query },
            }
          );
          setSuggestions(response.data);
        } catch (error) {
          console.error("Error fetching suggestions", error);
        }
      };
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        className="w-full rounded-md p-4 text-black text-lg shadow-md"
      />
      {suggestions.length > 0 && (
        <div className="absolute bg-white border border-gray-300 w-full mt-2 max-h-40 overflow-y-auto rounded-md shadow-lg">
          {suggestions.map((movie) => (
            <div
              key={movie.id}
              onClick={() => onMovieSelect(movie.id)}
              className="cursor-pointer hover:bg-gray-200 p-2"
            >
              {movie.name}{" "}
              {/* This is where each movie title text is displayed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieAutocomplete;
