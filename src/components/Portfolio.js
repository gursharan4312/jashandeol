import React from "react";
import { Container } from "reactstrap";
import Category from "./Category";
import MagicGrid from "react-magic-grid";

function Portfolio() {
  let categories = [
    {
      name: "People",
      img: "/assests/images/hero1.jpg",
    },
    {
      name: "Products",
      img: "/assests/images/hero2.jpg",
    },
    {
      name: "Landscape",
      img: "/assests/images/hero2.jpg",
    },
  ];
  return (
    <Container className="portfolio mb-5">
      <h1 className="text-center  mb-4">Check out my latest work</h1>
      <div className="categories">
        <MagicGrid gutter={0} items={categories.length}>
          {categories.map((category, index) => (
            <Category key={index} name={category.name} img={category.img} />
          ))}
        </MagicGrid>
      </div>
    </Container>
  );
}

export default Portfolio;
