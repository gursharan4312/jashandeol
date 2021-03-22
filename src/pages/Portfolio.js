import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Alert, Container, Row } from "reactstrap";
import Loader from "../components/Loader";
import "react-image-lightbox/style.css";

import Gallery from "../components/Gallery";

function Portfolio() {
  const [allImages, setAllImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let getImages = async () => {
      setLoading(true);
      try {
        let data = await fetch("/admin/data/allImages.json");
        data = await data.json();
        setAllImages([...data.Images]);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    if (allImages.length <= 0) {
      getImages();
    }
  }, [allImages.length, allImages]);
  return (
    <Layout type="other" className="portfolio-page">
      {loading && <Loader />}
      {error && <Alert color="danger">Something went wrong.</Alert>}
      <Container fluid className="mb-4">
        <Row>
          <Gallery images={allImages} />
        </Row>
      </Container>
    </Layout>
  );
}

export default Portfolio;
