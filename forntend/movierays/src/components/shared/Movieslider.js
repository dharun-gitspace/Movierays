import React from "react";
import Slider from "react-slick";
import "../../styles/Slider.css";
// Import images
import deadpool from "../../assets/Landingpage/slider/deadpool and wolverine.jpg";
import meiyazhagan from "../../assets/Landingpage/slider/meiyazhagan.jpg";
import aavesham from "../../assets/Landingpage/slider/aavesham.jpg";
import hustle from "../../assets/Landingpage/slider/hustle.jpg";
import joker2 from "../../assets/Landingpage/slider/joker 2.jpg";
import avatar2 from "../../assets/Landingpage/slider/avatar 2.jpg";
import killersoftheflowermoon from "../../assets/Landingpage/slider/killers of the flower moon.jpg";
import insideout2 from "../../assets/Landingpage/slider/inside out 2.jpg";
import goat from "../../assets/Landingpage/slider/goat.jpg";
import bigshort from "../../assets/Landingpage/slider/the big short.jpg";
import creed from "../../assets/Landingpage/slider/creed.jpg";
import thevarmagan from "../../assets/Landingpage/slider/thevarmagan.jpg";
import badboys from "../../assets/Landingpage/slider/bad boys for life.jpg";

function MovieSlider() {
  const images = [
    deadpool,
    meiyazhagan,
    aavesham,
    hustle,
    joker2,
    avatar2,
    killersoftheflowermoon,
    insideout2,
    goat,
    bigshort,
    creed,
    thevarmagan,
    badboys,
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // Disable right-click on the document to prevent copying
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  // Disable common keyboard shortcuts for copying or opening dev tools
  document.addEventListener("keydown", (e) => {
    if (
      (e.ctrlKey &&
        (e.key === "c" || e.key === "u" || e.key === "s" || e.key === "i")) || // Disable Ctrl + C, Ctrl + U (View Source), Ctrl + S, Ctrl + Shift + I
      (e.metaKey &&
        (e.key === "c" || e.key === "u" || e.key === "s" || e.key === "i")) // Disable Cmd equivalents for macOS
    ) {
      e.preventDefault();
    }
  });
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img
              src={image}
              alt={`movie${index + 1}`}
              draggable="false" // Disable image dragging
              onContextMenu={(e) => e.preventDefault()} // Disable right-click on the image
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MovieSlider;
