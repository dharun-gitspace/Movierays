import React from "react";
import MovieSlider from "./Movieslider";

function LandingPage() {
  return (
    <div className="bg-black">
      <div className="flex justify-center items-center h-screen"></div>
      <div className="bg-transparent opacity-30">
        <MovieSlider />
      </div>
      
    </div>
  );
}

export default LandingPage;
