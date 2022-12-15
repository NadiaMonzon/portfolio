const ProjectDetail = (props) => {
  console.log(props.project.image);
  return (
    <li className="project">
      <h4 className="project-title">{props.project.name}</h4>
      <img
        className="project-cover"
        src={props.project.image}
        alt={props.project.alt}
      ></img>
      <div className="project-wrapper animate__zoomIn">
        <a className="project-gitlink" href={props.project.githubLink}>
          <span>
            <i className="fa-brands fa-github project-gitlink__icon"></i>
          </span>
        </a>
        <a className="project-weblink" href={props.project.webLink}>
          <span>
            <i className="fa-regular fa-eye project-weblink__icon"></i>
          </span>
        </a>
        <p className="project-technologies nes-container is-rounded">
          {props.project.technologies}
        </p>
      </div>
      <p className="project-desc">{props.project.shortDesc}</p>
    </li>
  );
};

export default ProjectDetail;
