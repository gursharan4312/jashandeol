import React, { useState, useContext, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import MagicGrid from "react-magic-grid";
import { Context } from "../CategoryContext";
import { Container, Col } from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loader from "../components/Loader";
import Lightbox from "react-image-lightbox";

function AllImages() {
  const grid = useRef(null);
  const [state, dispatch] = useContext(Context);
  const { loading, allImages } = state;

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const toogleLightbox = (i = 0) => {
    setPhotoIndex(i);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let getCategories = async () => {
      dispatch({ type: "ALL_IMAGES_REQUEST" });

      try {
        let data = await fetch("/admin/data/allImages.json");
        data = await data.json();
        dispatch({
          type: "ALL_IMAGES_SUCCESS",
          payload: data.Images,
        });
      } catch (e) {
        dispatch({
          type: "ALL_IMAGES_ERROR",
          payload: e,
        });
      }
    };
    if (allImages.length <= 0) {
      getCategories();
    }
    if (grid.current !== null) grid.current.positionItems();
  }, [dispatch, allImages.length]);
  return (
    <Layout type="other" className="portfolio-page">
      {loading && <Loader />}
      <Container fluid className="gallery-images">
        {allImages.length > 0 && (
          <MagicGrid gutter={0} items={allImages.length} ref={grid}>
            {allImages.map((image, i) => (
              <Col
                sm={6}
                lg={3}
                md={4}
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
        )}
      </Container>
      {isOpen && (
        <Lightbox
          mainSrc={allImages[photoIndex]}
          nextSrc={allImages[(photoIndex + 1) % allImages.length]}
          prevSrc={
            allImages[(photoIndex + allImages.length - 1) % allImages.length]
          }
          onCloseRequest={toogleLightbox}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + allImages.length - 1) % allImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % allImages.length)
          }
        />
      )}
    </Layout>
  );
}

export default AllImages;
