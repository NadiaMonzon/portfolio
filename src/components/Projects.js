import API from "../services/projects.json";
import ProjectDetail from "./ProjectDetail";

function Projects() {
  const renderProjects = API.map((project, index) => {
    return <ProjectDetail project={project} key={index} />;
  });
  console.log(renderProjects);
  return (
    <section id="projects">
      <h2>Take a look at my projects!</h2>
      <p>
        These are my personal projects, created both with different teams and on
        my own. I will leave you the link to the repository and to the web page.
      </p>
      <ul>{renderProjects}</ul>
      <p>
        If you think you need any improvement or that you may be missing a
        featuring, do not hesitate to contact me or to open a pull request.
      </p>
    </section>
  );
}

export default Projects;
