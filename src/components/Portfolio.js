import React from "react";
import { Container, Row, Col } from "reactstrap";
import Category from "./Category";

function Portfolio() {
  return (
    <Container className="portfolio my-5">
      <h1 className="text-center  mb-4">Check out my latest work</h1>
      <Row className="categories">
        {[...Array(6).keys()].map((name, index) => (
          <Category key={index} name={name} />
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
