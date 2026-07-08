import { useState } from "react";

import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectItem";
import ProjectModal from "./ProjectModal";

import { DataProps, ProjectProps } from "@/types";

const Project = ({ project }: Pick<DataProps, "project">) => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

  return (
    <div>
      <SectionTitle>Projects</SectionTitle>
      <div className="grid gap-6 lg:grid-cols-3">
        {[...project].reverse().map((project) => (
          <ProjectItem key={project.id} project={project} onSelect={setSelectedProject} />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default Project;
