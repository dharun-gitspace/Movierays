import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchSuggestions } from "../../services/movie.service"; // Import the function

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getSuggestions = async () => {
      if (searchQuery.length >= 2) {
        try {
          const data = await fetchSuggestions(searchQuery); // Use the new function
          setSuggestions(data);
        } catch (error) {
          console.error("Error fetching movie suggestions:", error);
          setSuggestions([]); // Clear suggestions on error
        }
      } else {
        setSuggestions([]); // Clear suggestions if input is short
      }
    };

    getSuggestions();
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
