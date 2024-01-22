import React from "react";

import { useProjects } from "../../contexts/ProjectsContext";

const EditProjectView = () => {
  const { projectBeingEditedId: id, projects } = useProjects();

  const [project] = projects.filter((project) => project.id === id);

  return (
    <div className="container-editor flex gap-10">
      <div>
        <h2>{project.title}</h2>
        <p>WIP</p>
      </div>
      <img src={project.source} width="50%" />
    </div>
  );
};

export default EditProjectView;
