// MoviePlayer.js
import React, { useEffect, useState } from "react";
import { fetchMovieVideo } from "../../services/movie.service";

const MoviePlayer = ({ movieId }) => {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const loadMovieVideo = async () => {
      try {
        const url = await fetchMovieVideo(movieId);
        setVideoUrl(url);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    loadMovieVideo();
  }, [movieId]);

  return (
    <div className="flex justify-center items-center mt-96">
      <video
        src={videoUrl}
        controls
        controlsList="nodownload" // Disable download option
        className="rounded-lg shadow-md w-full"
      />
    </div>
  );
};

export default MoviePlayer;
