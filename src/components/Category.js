import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

function Category({ name, img }) {
  return (
    <Col md={4} sm={6} className="category">
      <img src={img} className="img-fluid" alt="category" />
      <Link to={`/portfolio/${name}`}>
        <div className="category-inner">
          <span>{name}</span>
        </div>
      </Link>
    </Col>
  );
}

export default Category;
