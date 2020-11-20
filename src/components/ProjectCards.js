import React from "react"
import "../styles/Projects.css";
import { Row, Col } from "react-bootstrap";
import pic1 from '../assets/WeWorkout2.JPG';
import pic2 from '../assets/EatDaBurger.JPG';
import pic3 from '../assets/WeatherApp.JPG';
import pic4 from '../assets/WorkDayScheduler Readme.JPG';
import pic5 from '../assets/Password_Generator_Readme.JPG';
import pic6 from '../assets/pictures from space.JPG';
import pic7 from '../assets/pictures from GoogleSearch.JPG';


function ProjectCards() {
    return (
        <Row className="mainRow animate__animated animate__slideInUp">
            <Row>
                <Col>
                    <div className="contain mr-2 ml-2 mt-5 mb-8">
                        <img className="projectsPic" src={pic1} alt="" />
                        <div className="centered">
                            <h1>WeWorkout App</h1>
                            <p>We Workout is a fitness app for users new to training.</p>
                            <a href="https://weworkoutapp.herokuapp.com/">Learn More</a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="contain mr-2 ml-2 mt-5 mb-8">
                        <img className="projectsPic" src={pic2} alt="" />
                        <div className="centered">
                            <h1>Eat Da Burger App</h1>
                            <p>Eat-Da-Burger! is a resturant app that lets users input the names or burgers they'd like
                    to eat.</p>
                            <a href="https://github.com/SAR-SA/Eat-Da-Burger-App">Learn More</a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="contain mr-2 ml-2 mt-5 mb-8">
                        <img className="projectsPic" src={pic3} alt="" />
                        <div className="centered">
                            <h1>Weather App</h1>
                            <p>A Weather application that gives you the current weather for your selected area and the 5 day forecast.</p>
                            <a href="https://github.com/SAR-SA/Homework-6-Weather-App">Learn More</a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="contain mr-2 ml-2 mt-5 mb-8">
                        <img className="projectsPic" src={pic4} alt="" />
                        <div className="centered">
                            <h1>Workday Scheduler</h1>
                            <p>This is a workday Scheduler Based on a 9-5 day. You can type and save any event or task.</p>
                            <a href="https://github.com/SAR-SA/Homework-5-Work-Day-Scheduler">Learn More</a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="contain mr-2 ml-2 mt-5 mb-8">
                        <img className="projectsPic" src={pic5} alt="" />
                        <div className="centered">
                            <h1>Password Generator</h1>
                            <p>Password Generator. Determine how long you want your passwrod and what characters you would like to use.</p>
                            <a href="https://github.com/SAR-SA/Homework-3-Password-Generator">Learn More</a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="contain mr-2 ml-2 mt-5 mb-8">
                        <img className="projectsPic" src={pic6} alt="" />
                        <div className="centered">
                            <h1>Pictures From space</h1>
                            <p>A web application designed for anyone who likes space.</p>
                            <a href="https://github.com/nkleinmann/Project-Wilder">Learn More</a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="contain mr-2 ml-2 mt-5 mb-8">
                        <img className="projectsPic" src={pic7} alt="" />
                        <div className="centered">
                            <h1>Pictures From space</h1>
                            <p>This App is used to search and save books from the entire Google Books library.</p>
                            <a href="https://morning-inlet-35060.herokuapp.com/">Learn More</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Row>
    )
}

export default ProjectCards;
