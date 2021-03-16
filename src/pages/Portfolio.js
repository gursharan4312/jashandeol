import React, { useState, useContext, useEffect, useRef } from "react";
import { Container, Col } from "reactstrap";
import Layout from "../components/Layout";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import MagicGrid from "react-magic-grid";
import { Context } from "../CategoryContext";
import Loader from "../components/Loader";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Portfolio({ match }) {
  const grid = useRef(null);
  const [state, dispatch] = useContext(Context);
  const { loading, categories } = state;
  const [images, setImages] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const toogleLightbox = (i = 0) => {
    setPhotoIndex(i);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let getCategories = async () => {
      dispatch({ type: "CATEGORY_REQUEST" });

      try {
        let data = await fetch("/admin/data/categories.json");
        data = await data.json();
        dispatch({
          type: "CATEGORY_REQUEST_SUCCESS",
          payload: data.categories,
        });
      } catch (e) {
        dispatch({
          type: "CATEGORY_REQUEST_ERROR",
          payload: e,
        });
      }
    };

    if (categories.length === 0) {
      getCategories();
    } else {
      let count = 0;
      (function interval() {
        if (count < 10) {
          if (grid.current !== null) grid.current.positionItems();
          window.setTimeout(() => {
            interval();
            count += 1;
            console.log("ref");
          }, 500);
        }
      })();
    }
  }, [dispatch, categories.length]);

  useEffect(() => {
    let category;
    for (category of categories) {
      if (category.name.toLowerCase() === match.params.category.toLowerCase()) {
        setImages([...category.images]);
      }
    }
  }, [categories, match.params.category]);

  return (
    <Layout type="other" className="portfolio-page my-5 pt-2">
      <Container>
        <h1 className="mt-5 mb-4 text-capitalize">{match.params.category}</h1>
        <div className="gallery-images">
          {loading && <Loader />}
          {images.length > 0 ? (
            <MagicGrid gutter={0} items={images.length} ref={grid}>
              {images.map((image, i) => (
                <Col
                  sm={6}
                  lg={4}
                  key={i}
                  className="img-col"
                  onClick={() => toogleLightbox(i)}
                >
                  <LazyLoadImage
                    alt="category"
                    src={image} // use normal <img> attributes as props
                    className="img-fluid my-2"
                    effect="blur"
                  />
                </Col>
              ))}
            </MagicGrid>
          ) : (
            <Loader />
          )}
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
