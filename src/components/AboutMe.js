import React from "react";
import { Container, Row, Col } from "reactstrap";

function AboutMe() {
  return (
    <Container className="aboutme-container">
      <Row className="py-4 my-4">
        <Col md={6}>
          <img
            src="/assests/images/hero1.jpg"
            alt="jashandeol"
            className="img-fluid"
          />
        </Col>
        <Col>
          <h1>Hi there, my name is Jashandeol!</h1>
          <p>
            I'm a professional photographer and filmmaker located in
            vancouver,BC
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
