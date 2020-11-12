import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

function Category({ name }) {
  return (
    <Col md={4} sm={6} className="category my-2">
      <img
        src="/assests/images/hero1.jpg"
        className="img-fluid"
        alt="category"
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
