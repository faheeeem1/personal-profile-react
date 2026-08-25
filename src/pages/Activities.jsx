import { useState } from "react";

const activities = [
    {
        id: 1,
        title: "Academic Activity",
        image: "/images/academic.jpg",
        description:
            "Academic activities and programming projects."
    },
    {
        id: 2,
        title: "Technical Activity",
        image: "/images/technical.jpg",
        description:
            "Learning programming, web development and technical skills."
    },
    {
        id: 3,
        title: "Web Development",
        image: "/images/web-development.jpg",
        description:
            "Practicing HTML, CSS, JavaScript and modern web development."
    }
];

function Activities() {
    const [selectedActivity, setSelectedActivity] = useState(
        activities[0]
    );

    return (
        <section>
            <h2>Activities / Gallery</h2>

            <article>
                <h3>Academic Activities</h3>

                <p>
                    I participate in academic activities and work on projects
                    related to programming and technology.
                </p>
            </article>

            <article>
                <h3>Technical Activities</h3>

                <p>
                    I spend time learning programming, web development and
                    other technical skills.
                </p>
            </article>

            <h3>Gallery</h3>

            <div className="gallery-display">
                <img
                    src={selectedActivity.image}
                    alt={selectedActivity.title}
                />

                <h3>{selectedActivity.title}</h3>

                <p>{selectedActivity.description}</p>
            </div>

            <div className="project-cards">
                {activities.map((activity) => (
                    <div
                        className="project-card"
                        key={activity.id}
                        onClick={() => setSelectedActivity(activity)}
                    >
                        <img
                            src={activity.image}
                            alt={activity.title}
                        />

                        <h4>{activity.title}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Activities;