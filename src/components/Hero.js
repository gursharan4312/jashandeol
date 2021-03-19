import React, { useState, useEffect } from "react";
import { UncontrolledCarousel } from "reactstrap";
import Loader from "./Loader";

function Hero() {
  const [images, setImages] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    async function getImages() {
      setloading(true);
      let data = await fetch("/admin/data/heroImages.json");
      data = await data.json();
      setImages([...data.images]);
      setloading(false);
    }
    getImages();
  }, []);

  return (
    <div className="hero-container">
      {loading && <Loader />}
      <UncontrolledCarousel
        items={images.map((image, i) => ({
          src: image,
          altText: "slide",
          header: "Jashan Deol",
          caption: "Photographer & FilmMaker",
          key: i,
        }))}
      />
    </div>
  );
}

export default Hero;
