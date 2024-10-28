import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.length >= 2) {
      const fetchSuggestions = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/movies/search`, {
            params: { query: searchQuery },
          });
          setSuggestions(response.data);
        } catch (error) {
          console.error("Error fetching movie suggestions:", error);
        }
      };
      fetchSuggestions();
    } else {
      setSuggestions([]); // Clear suggestions if input is short
    }
  }, [searchQuery]);

  const handleSelectMovie = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full rounded-md p-4 text-black text-lg shadow-md"
      />
      {suggestions.length > 0 && (
        <ul className="autocomplete-suggestions">
          {suggestions.map((movie) => (
            <li key={movie.id} onClick={() => handleSelectMovie(movie.id)}>
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
