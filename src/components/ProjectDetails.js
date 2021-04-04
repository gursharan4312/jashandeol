import React from "react";

function ProjectDetails({ name, images, details }) {
  return (
    <div className="project-details-continer">
      <div className="project-details">
        <h2>{name}</h2>
        <p>{details}</p>
      </div>
      <div className="project-images">
        {images.map((image, i) => (
          <img src={image} key={i} alt={name} />
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;
