import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container } from "reactstrap";
import Layout from "../components/Layout";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectDetails from "../components/ProjectDetails";
import Loader from "../components/Loader";

function Projects() {
  const { projectName } = useParams();
  const history = useHistory();

  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(false);

  const getProjects = async () => {
    setLoading(true);
    let data = await fetch("/admin/data/projects.json");
    data = await data.json();
    setProjects([...data.projects]);
    setLoading(false);
  };

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    if (projects.length === 0 && projectName !== "") {
      getProjects();
    } else {
      setSelectedProject(
        projects.filter((project) => project.name === projectName)[0]
      );
    }
  }, [projectName, projects, history]);
  return (
    <Layout>
      {loading && <Loader />}
      <Container fluid className="projects-container">
        {selectedProject ? (
          <ProjectDetails {...selectedProject} />
        ) : (
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              420: 1,
              600: 2,
              768: 4,
              1200: 5,
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
                  <div className="project-name" style={{ textAlign: "center" }}>
                    <h4>{project.name}</h4>
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
