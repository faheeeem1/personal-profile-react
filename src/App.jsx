import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navigation from "./components/nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import CV from "./pages/CV";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import Weather from "./pages/Weather";
import Contact from "./pages/Contact";
import Activities from "./pages/Activities";

function App() {
    return (
        <>
            <Header />

            <Navigation />

            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/activities" element={<Activities />} />
              </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;