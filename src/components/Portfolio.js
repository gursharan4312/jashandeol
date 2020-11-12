import React from "react";
import { Container, Row, Col } from "reactstrap";

function Portfolio() {
  return (
    <Container className="portfolio">
      <Row className="categories">
        <Col md={4} sm={6} className="category my-2">
          <img
            src="/assests/images/hero1.jpg"
            className="img-fluid"
            alt="category"
          />
          <div className="category-inner">
            <span>category1</span>
          </div>
        </Col>
        <Col md={4} sm={6} className="category my-2">
          <img
            src="/assests/images/hero1.jpg"
            className="img-fluid"
            alt="category"
          />
          <div className="category-inner">
            <span>category1</span>
          </div>
        </Col>
        <Col md={4} sm={6} className="category my-2">
          <img
            src="/assests/images/hero1.jpg"
            className="img-fluid"
            alt="category"
          />
          <div className="category-inner">
            <span>category1</span>
          </div>
        </Col>
        <Col md={4} sm={6} className="category my-2">
          <img
            src="/assests/images/hero1.jpg"
            className="img-fluid"
            alt="category"
          />
          <div className="category-inner">
            <span>category1</span>
          </div>
        </Col>
        <Col md={4} sm={6} className="category my-2">
          <img
            src="/assests/images/hero1.jpg"
            className="img-fluid"
            alt="category"
          />
          <div className="category-inner">
            <span>category1</span>
          </div>
        </Col>
        <Col md={4} sm={6} className="category my-2">
          <img
            src="/assests/images/hero1.jpg"
            className="img-fluid"
            alt="category"
          />
          <div className="category-inner">
            <span>category1</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
