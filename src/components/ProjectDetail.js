import Web from "../images/web.png";

const ProjectDetail = (props) => {
  console.log(props.project.image);
  return (
    <li className="project nes-container with-title is-centered">
      <h4 className="title">{props.project.name}</h4>
      <img
        className="project-cover"
        src={props.project.image}
        alt={props.project.alt}
      ></img>
      <div className="project-wrapper animate__zoomIn">
        <div className="icon-wrapper">
          <a className="project-gitlink" href={props.project.githubLink}>
            <span>
              <i className="nes-icon github is-medium"></i>
            </span>
          </a>
          <a className="project-weblink" href={props.project.webLink}>
            <span>
              <img className="icon-2" alt="web icon" src={Web} />
            </span>
          </a>
        </div>
        <p className="project-technologies highlight nes-input is-error">
          {props.project.technologies}
        </p>
      </div>
      <p className="project-desc">{props.project.shortDesc}</p>
    </li>
  );
};

export default ProjectDetail;
