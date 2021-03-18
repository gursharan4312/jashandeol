import React, { useState, useContext, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import { Context } from "../CategoryContext";
import { Container, Row } from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loader from "../components/Loader";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Gallery = ({ images, toogleLightbox }) => {
  var colNum = 0;
  var col1Images = [];
  var col2Images = [];
  var col3Images = [];
  var col4Images = [];
  images.forEach((image) => {
    if (colNum === 0) col1Images.push(image);
    else if (colNum === 1) col2Images.push(image);
    else if (colNum === 2) col3Images.push(image);
    else if (colNum === 3) col4Images.push(image);
    colNum = (colNum + 1) % 4;
  });
  return (
    <>
      <div className="col-10 col-lg-3 col-md-4 col-sm-6 mx-auto">
        {col1Images.map((image, i) => (
          <LazyLoadImage
            alt="category"
            src={image}
            className="img-fluid my-2"
            effect="blur"
            onClick={() => toogleLightbox(image)}
          />
        ))}
      </div>
      <div className="col-10 col-lg-3 col-md-4  col-sm-6 mx-auto">
        {col2Images.map((image, i) => (
          <LazyLoadImage
            alt="category"
            src={image}
            className="img-fluid my-2 img"
            effect="blur"
            onClick={() => toogleLightbox(image)}
          />
        ))}
      </div>
      <div className="col-10 col-lg-3 col-md-4  col-sm-6 mx-auto">
        {col3Images.map((image, i) => (
          <LazyLoadImage
            alt="category"
            src={image}
            className="img-fluid my-2"
            effect="blur"
            onClick={() => toogleLightbox(image)}
          />
        ))}
      </div>
      <div className="col-10 col-lg-3 col-md-4  col-sm-6 mx-auto">
        {col4Images.map((image, i) => (
          <LazyLoadImage
            alt="category"
            src={image}
            className="img-fluid my-2"
            effect="blur"
            onClick={() => toogleLightbox(image)}
          />
        ))}
      </div>
    </>
  );
};

function AllImages() {
  const grid = useRef(null);
  const [state, dispatch] = useContext(Context);
  const { loading, allImages } = state;

  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const toogleLightbox = (image) => {
    setPhotoIndex(allImages.indexOf(image) || 0);
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
    } else {
      setImages([...allImages]);
    }
    if (grid.current !== null) grid.current.positionItems();
  }, [dispatch, allImages.length, allImages]);
  return (
    <Layout type="other" className="portfolio-page">
      {loading && <Loader />}
      <Container fluid className="gallery-images">
        <Row>
          <Gallery images={allImages} toogleLightbox={toogleLightbox} />
        </Row>
      </Container>
      {images && isOpen && (
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

export default AllImages;
