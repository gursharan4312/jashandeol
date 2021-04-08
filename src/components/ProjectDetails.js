import Markdown from "markdown-to-jsx";
import { Container } from "reactstrap";

function ProjectDetails({ name, images, details }) {
  return (
    <Container className="project-details-continer">
      <div className="project-details">
        <h3>{name}</h3>
        {details && <Markdown>{details}</Markdown>}
      </div>
      <div className="project-images">
        {images.map((image, i) => (
          <img src={image} key={i} alt={name} className="img-fluid mb-2" />
        ))}
      </div>
    </Container>
  );
}

export default ProjectDetails;
