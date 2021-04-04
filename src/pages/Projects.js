import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container } from "reactstrap";
import Layout from "../components/Layout";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectDetails from "../components/ProjectDetails";

function Projects({ match }) {
  const { projectName } = useParams();
  const history = useHistory();
  console.log(projectName);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    setProjects([
      {
        name: "Project 1",
        images: [
          "/assests/images/jdeol_portrait_ranaranbir.jpg",
          "/assests/images/jdeol_portrait_simran_artgallery_01.jpg",
        ],
        details:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and ",
      },
      {
        name: "Project 2",
        images: [
          "/assests/images/jdeol_portrait_ranaranbir.jpg",
          "/assests/images/jdeol_portrait_simran_artgallery_01.jpg",
        ],
        details:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and ",
      },
      {
        name: "Project 3",
        images: [
          "/assests/images/jdeol_portrait_ranaranbir.jpg",
          "/assests/images/jdeol_portrait_simran_artgallery_01.jpg",
        ],
        details: "",
      },
      {
        name: "Project 4",
        images: [
          "/assests/images/jdeol_portrait_ranaranbir.jpg",
          "/assests/images/jdeol_portrait_simran_artgallery_01.jpg",
        ],
        details: "",
      },
      {
        name: "Project 5",
        images: [
          "/assests/images/jdeol_portrait_ranaranbir.jpg",
          "/assests/images/jdeol_portrait_simran_artgallery_01.jpg",
        ],
        details: "",
      },
      {
        name: "Project 6",
        images: [
          "/assests/images/jdeol_portrait_ranaranbir.jpg",
          "/assests/images/jdeol_portrait_simran_artgallery_01.jpg",
        ],
        details: "",
      },
      {
        name: "Project 1",
        images: [
          "/assests/images/jdeol_portrait_ranaranbir.jpg",
          "/assests/images/jdeol_portrait_simran_artgallery_01.jpg",
        ],
        details: "",
      },
    ]);
  }, []);
  useEffect(() => {
    setSelectedProject(
      projects.filter((project) => project.name === projectName)[0]
    );
  }, [projectName]);
  return (
    <Layout>
      <Container fluid className="projects-container">
        {selectedProject ? (
          <ProjectDetails {...selectedProject} />
        ) : (
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              420: 1,
              600: 2,
              768: 4,
              1200: 7,
              1920: 7,
            }}
          >
            <Masonry gutter="1px">
              {projects.map((project, i) => (
                <div
                  className="project"
                  key={i}
                  onClick={() => history.push(`/projects/${project.name}`)}
                >
                  <div className="project-name">
                    <p>{project.name}</p>
                    <small>--view--</small>
                  </div>
                  <img
                    className="img-fluid"
                    src={project.images[0]}
                    alt={project.name}
                  />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        )}
      </Container>
    </Layout>
  );
}

export default Projects;
