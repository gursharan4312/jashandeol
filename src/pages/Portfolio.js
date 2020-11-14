import React, { useState, useRef } from "react";
import { Container, Col } from "reactstrap";
import Layout from "../components/Layout";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import MagicGrid from "react-magic-grid";

function Portfolio({ match }) {
  const gridRef = useRef();
  let images = [
    "/assests/images/hero1.jpg",
    "/assests/images/profile.jpg",
    "/assests/images/hero2.jpg",
    "/assests/images/profile.jpg",
    "/assests/images/hero1.jpg",
    "/assests/images/hero2.jpg",
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const toogleLightbox = (i = 0) => {
    setPhotoIndex(i);
    setIsOpen(!isOpen);
  };
  return (
    <Layout type="other" className="portfolio-page my-5 pt-2">
      <Container>
        <h1 className="mt-5 mb-4 text-capitalize">{match.params.category}</h1>
        <div className="gallery-images">
          <MagicGrid gutter={0} items={images.length} ref={gridRef}>
            {images.map((image, i) => (
              <Col
                sm={6}
                lg={4}
                key={i}
                className="img-col"
                onClick={() => toogleLightbox(i)}
              >
                <img src={image} className="img-fluid my-2" alt="category" />
              </Col>
            ))}
          </MagicGrid>
        </div>
      </Container>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={toogleLightbox}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </Layout>
  );
}

export default Portfolio;
