import React from "react";
import GettingStarted from "./GetStart";
import MovieSlider from "./Movieslider";
import Header from "./Header";
import FAQ from "./FAQ";
import Footer from "./Footer";
import ScrollToTop from "react-scroll-to-top";
import TopArrow from "../../assets/Landingpage/slider/toparrowicon";
import "../../styles/Landingpage.css"

function LandingPage() {
  return (
    <div className="bg-black">
      <div className="relative h-screen bg-black">
        {/* MovieSlider with transparency */}
        <div className="absolute inset-0">
          <div className="h-full w-full opacity-20">
            <MovieSlider />
          </div>
        </div>

        {/* Header with higher z-index */}
        <div className="relative z-20">
          <Header />
        </div>

        {/* GettingStarted content */}
        <div className="relative z-10 flex justify-center items-center h-full -mt-12">
          <GettingStarted />
        </div>
      </div>

      <FAQ />
      <ScrollToTop smooth component={<TopArrow />} className="scroll-btn mb-10" />
      <Footer />
    </div>
  );
}

export default LandingPage;
