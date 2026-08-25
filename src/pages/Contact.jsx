import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));

        setSubmitted(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            formData.name.trim() === "" ||
            formData.email.trim() === "" ||
            formData.contact === "" ||
            formData.message.trim() === ""
        ) {
            return;
        }

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            contact: "",
            message: ""
        });
    };

    return (
        <section>
            <h2>Contact Me</h2>

            <p>
                You can contact me using the form below.
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>

                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <label htmlFor="email">Email:</label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label>Preferred Contact:</label>

                <div>
                    <input
                        type="radio"
                        id="email-contact"
                        name="contact"
                        value="email"
                        checked={formData.contact === "email"}
                        onChange={handleChange}
                    />

                    <label htmlFor="email-contact">
                        Email
                    </label>

                    <input
                        type="radio"
                        id="linkedin-contact"
                        name="contact"
                        value="linkedin"
                        checked={formData.contact === "linkedin"}
                        onChange={handleChange}
                    />

                    <label htmlFor="linkedin-contact">
                        LinkedIn
                    </label>
                </div>

                <label htmlFor="message">Message:</label>

                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                />

                <button type="submit">
                    Send Message
                </button>
            </form>

            {submitted && (
                <p>
                    Thank you! Your message has been submitted.
                </p>
            )}

            <h3>Links</h3>

            <p>
                Email:{" "}
                <a href="mailto:U2408027@rajagiri.edu.in">
                    U2408027@rajagiri.edu.in
                </a>
            </p>

            <p>
                LinkedIn:{" "}
                <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    My LinkedIn Profile
                </a>
            </p>

            <h3>My Location</h3>

            <iframe
                src="https://www.google.com/maps?q=Rajagiri+School+of+Engineering+and+Technology&output=embed"
                width="600"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Rajagiri School of Engineering and Technology location"
            />
        </section>
    );
}

export default Contact;