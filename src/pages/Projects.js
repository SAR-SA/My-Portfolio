import Nav from '../components/Nav';
import "../styles/Projects.css";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import ProjectCards from '../components/ProjectCards';

function Projects() {
    return (
        <div>
            <Nav />
            <h1 className="projectsTitle animate__animated animate__zoomIn">Projects</h1>
            <Container>
            <hr></hr>
             <ProjectCards />
            </Container>
            <Footer />
        </div>

    );
}

export default Projects;
