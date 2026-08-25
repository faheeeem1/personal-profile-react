import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(projects[0]);

    return (
        <section>
            <h2>Projects / Activities Gallery</h2>

            <div className="gallery-display">
                <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                />

                <h3>{selectedProject.title}</h3>

                <p>{selectedProject.description}</p>
            </div>

            <div className="project-cards">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onSelect={setSelectedProject}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;