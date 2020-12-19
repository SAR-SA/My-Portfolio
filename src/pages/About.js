import React from 'react';
import AboutPic from '../components/AboutPic';
import Summary from '../components/Summary';
// import Nav from '../components/Nav';
import Nav from '../components/Nav1';
import Languges from '../components/Languges';
import "../styles/About.css"
import Footer from '../components/Footer'
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            {/* <Nav /> */}
            <h1 className="aboutTitle animate__animated animate__zoomInDown">About</h1>
            <Container>
                <hr></hr>
                <Summary />
                <Row className="aboutRow">
                    <Row>
                        <Col>
                        <div className="pic">
                            <AboutPic />
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className="list">
                            <Languges />
                        </div>
                        </Col>
                    </Row>
                </Row>
            </Container>


            <Footer />
        </div>

    );
};

export default About;