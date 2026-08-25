function ProjectCard({ project, onSelect }) {
    return (
        <div
            className="project-card"
            onClick={() => onSelect(project)}
        >
            <img
                src={project.image}
                alt={project.title}
            />

            <h3>{project.title}</h3>
        </div>
    );
}

export default ProjectCard;