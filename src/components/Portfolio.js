import React from "react";
import { Container, Row, Col } from "reactstrap";

function Portfolio() {
  return (
    <Container className="portfolio">
      <Row className="categories">
        <Col md={4} sm={6} lg={3} className="category">
          <img
            src="/assests/images/hero1.jpg"
            className="img-fluid"
            alt="category"
          />
        </Col>
        <Col md={4} sm={6} lg={3} className="category">
          <img
            src="/assests/images/hero1.jpg"
            className="img-fluid"
            alt="category"
          />
        </Col>
        <Col md={4} sm={6} lg={3} className="category">
          <img
            src="/assests/images/hero1.jpg"
            className="img-fluid"
            alt="category"
          />
        </Col>
        <Col md={4} sm={6} lg={3} className="category">
          <img
            src="/assests/images/hero1.jpg"
            className="img-fluid"
            alt="category"
          />
        </Col>
        <Col md={4} sm={6} lg={3} className="category">
          <img
            src="/assests/images/hero1.jpg"
            className="img-fluid"
            alt="category"
          />
        </Col>
        <Col md={4} sm={6} lg={3} className="category">
          <img
            src="/assests/images/hero1.jpg"
            className="img-fluid"
            alt="category"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
