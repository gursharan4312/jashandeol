import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Loader from "./Loader";

function AboutMe() {
  const [profile, setProfile] = useState({
    header: "",
    details: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProfile() {
      setLoading(true);
      let data = await fetch("admin/data/profile.json");
      data = await data.json();
      setProfile({
        header: data.header,
        details: data.details,
        image: data.image,
      });
      setLoading(false);
    }
    getProfile();
  }, []);

  return (
    <Container className="aboutme-container py-4">
      {loading ? (
        <Loader />
      ) : (
        <Row className="py-4 my-4">
          <Col md={4}>
            <img src={profile.image} alt="jashandeol" className="img-fluid" />
          </Col>
          <Col>
            <h1>{profile.header}</h1>
            <p>{profile.details}</p>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default AboutMe;
