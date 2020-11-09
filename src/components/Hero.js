import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";

function Hero() {
  const items = [
    {
      src: "/assests/images/hero1.jpg",
      altText: "Slide 1",
      //   caption: "Slide 1",
      // header: "Slide 1 Header",
      key: "1",
    },
    {
      src: "/assests/images/hero2.jpg",
      altText: "Slide 2",
      //   caption: "Slide 2",
      // header: "Slide 2 Header",
      key: "2",
    },
  ];
  return (
    <div className="hero-container">
      <UncontrolledCarousel
        items={items}
        controls={false}
        // interval={1000000}
      />
      <div className="hero-inner-container">
        <div className="hero-content p-4">
          <h3>Jashan Deol</h3>
          <h1>Photographer &amp; FilmMaker</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
