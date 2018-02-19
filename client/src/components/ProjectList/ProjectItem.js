import React from "react";
import {Link} from "react-router-dom";

const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      <Link to={`/projects/${project.id}`}>{project.name}</Link>
    </div>
  )
}

export default ProjectItem;
