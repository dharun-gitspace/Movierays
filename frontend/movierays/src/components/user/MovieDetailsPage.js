// MovieDetailPage.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import MovieDetail from "./MovieDetail";

const MovieDetailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-2 py-2">
        <button
          onClick={() => navigate("/homepage")}
          className="block text-center py-8 figtree-bold text-xl text-yellow-300 hover:text-yellow-400"
        >
          Back to Home
        </button>
        <MovieDetail movie={state.movie} />
      </div>
    </div>
  );
};

export default MovieDetailPage;
