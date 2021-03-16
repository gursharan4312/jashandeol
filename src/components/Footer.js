import React from "react";
import { Container, Row, Col } from "reactstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={8} sm={10}>
            <h2>Let's get in touch and create beautiful thiings together</h2>
          </Col>
          <Col sm={4}>
            <a href="/contact" className="btn btn-lg btn-outline-light ml-4">
              Hire me
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
