import Markdown from "markdown-to-jsx";
import { Container } from "reactstrap";

function ProjectDetails({ name, images, details }) {
  return (
    <Container className="project-details-continer">
      <div className="project-details">
        <h2>{name}</h2>
        {details && <Markdown>{details}</Markdown>}
      </div>
      <div className="project-images">
        {images.map((image, i) => (
          <img src={image} key={i} alt={name} className="img-fluid" />
        ))}
      </div>
    </Container>
  );
}

export default ProjectDetails;
