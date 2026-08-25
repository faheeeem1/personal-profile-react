import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/cv">CV</Link>
            <Link to="/education">Education</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/weather">Weather</Link>
            <Link to="/activities">Activities</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default Navigation;