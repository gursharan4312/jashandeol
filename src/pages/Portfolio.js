import React from "react";
import { Container, Row, Col } from "reactstrap";
import Layout from "../components/Layout";

function Portfolio() {
  return (
    <Layout type="other" >
      <Container>
        <Row>
          <Col md={4} sm={6} className="my-2">
            <img
              src="/assests/images/hero1.jpg"
              className="img-fluid"
              alt="category"
            />
          </Col>
          <Col md={4} sm={6} className="my-2">
            <img
              src="/assests/images/hero1.jpg"
              className="img-fluid"
              alt="category"
            />
          </Col>
          <Col md={4} sm={6} className="my-2">
            <img
              src="/assests/images/hero1.jpg"
              className="img-fluid"
              alt="category"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Portfolio;
