import React from "react";
import { Container, Row } from "reactstrap";
import Category from "./Category";

function Portfolio() {
  var categories = [
    "Potrait",
    "Wedding",
    "Landscape",
    "Potrait",
    "Wedding",
    "Landscape",
  ];
  return (
    <Container className="portfolio my-5">
      <h1 className="text-center  mb-4">Check out my latest work</h1>
      <Row className="categories">
        {categories.map((name, index) => (
          <Category key={index} name={name} />
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
