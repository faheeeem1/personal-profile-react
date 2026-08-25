interface Project {
    id: number;
    title: string;
    description: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Online Course Registration System",
        description:
            "A web-based system for students to view available courses and register for courses."
    },
    {
        id: 2,
        title: "Personal Website",
        description:
            "A personal portfolio website created using HTML5, CSS3 and React."
    }
];

function getProjectTitle(project: Project): string {
    return project.title;
}

console.log(getProjectTitle(projects[0]));