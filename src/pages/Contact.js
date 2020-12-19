import React from 'react';
// import Nav from '../components/Nav';
import Nav from '../components/Nav1';
import Footer from '../components/Footer';
import { Container } from "react-bootstrap";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <div>
            <div>
                {/* <Nav /> */}
            </div>
            <Container>
            <h1 className="contactTitle mt-3">Contact Me!</h1>
            <hr></hr>
            <ContactForm />
            </Container>
        <Footer />
        </div>
    );
};

export default Contact;
