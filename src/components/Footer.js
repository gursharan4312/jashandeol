import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={8} sm={10}>
            <h2>Let's get in touch and create beautiful thiings together</h2>
          </Col>
          <Col sm={4}>
            <Link to="/#contact" className="btn btn-lg btn-outline-light ml-4">
              Hire me
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
