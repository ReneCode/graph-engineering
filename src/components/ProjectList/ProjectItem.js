import React from "react";

const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      {project.name}
    </div>
  )
}

export default ProjectItem;
