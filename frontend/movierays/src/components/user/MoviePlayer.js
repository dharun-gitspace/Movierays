import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAuthHeader } from "../../services/auth-header";
const MoviePlayer = ({ movieId }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const headers = getAuthHeader();
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/movies/watch/${movieId}`,
          { headers, responseType: "blob" }
        );
        const url = URL.createObjectURL(response.data);
        setVideoUrl(url);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
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
