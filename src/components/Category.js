import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Category({ name, img }) {
  return (
    <Col md={4} sm={6} className="category py-2">
      <LazyLoadImage
        src={img}
        className="img-fluid"
        alt="category"
        effect="blur"
      />
      <Link to={`/portfolio/${name}`}>
        <div className="category-inner">
          <span>{name}</span>
        </div>
      </Link>
    </Col>
  );
}

export default Category;
