import React from "react"
import "../styles/Projects.css";
import { Row, Col } from "react-bootstrap";
import pic1 from '../assets/WeWorkout2.JPG';
import pic2 from '../assets/EatDaBurger.JPG';
import pic3 from '../assets/WeatherApp.JPG';
import pic4 from '../assets/WorkDayScheduler Readme.JPG';
import pic5 from '../assets/Password_Generator_Readme.JPG';
import pic6 from '../assets/DashBoard.JPG';
import pic7 from '../assets/GoogleBooksSearch.JPG';

const projectsArray = [
    {
        img: pic6,
        alt: "Job Trackr Pic",
        title: "Job Trackr",
        summary: "Job Tracker allows users to create an account, search and apply for remote jobs, and track the applications every step of the way. It also has benchmark goals to keep the user motivated and on pace with their job search.",
        link: "https://whispering-woodland-82554.herokuapp.com/"
    },
    {
        img: pic1,
        alt: "WeWorkout App Pic",
        title: "WeWorkout App",
        summary: "We Workout is a fitness app for users new to training.",
        link: "https://weworkoutapp.herokuapp.com/"
    },
    {
        img: pic7,
        alt: "Google Books Search Pic",
        title: "Google Books Search",
        summary: "This App is used to search and save books from the entire Google Books library.",
        link: "https://morning-inlet-35060.herokuapp.com/"
    },
    {
        img: pic3,
        alt: "Weather App Pic",
        title: "Weather App",
        summary: "A Weather application that gives you the current weather for your selected area and the 5 day forecast.",
        link: "https://github.com/SAR-SA/Homework-6-Weather-App"
    },
    {
        img: pic4,
        alt: "Workday Scheduler Pic",
        title: "Workday Scheduler",
        summary: "This is a workday Scheduler Based on a 9-5 day. You can type and save any event or task.",
        link: "https://github.com/SAR-SA/Homework-5-Work-Day-Scheduler"
    },
    {
        img: pic5,
        alt: "Password Generator Pic",
        title: "Password Generator",
        summary: "Password Generator. Determine how long you want your passwrod and what characters you would like to use.",
        link: "https://github.com/SAR-SA/Homework-3-Password-Generator"
    },
    {
        img: pic2,
        alt: "EatDa Burger Pic",
        title: "Eat Da Gurger App",
        summary: "Eat-Da-Burger! is a resturant app that lets users input the names or burgers they'd like to eat.",
        link: "https://github.com/SAR-SA/Eat-Da-Burger-App"
    },
]


function ProjectCards() {
    return (
        <Row className="mainRow animate__animated animate__slideInUp">
            {projectsArray.map((listItem) =>
                <Row>
                    <Col>
                        <div class="card" id="cards">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" id="projectImage" src={listItem.img} />
                            </div>
                            <div class="card-content">
                                <h1 class="card-title activator grey-text text-darken-4"><b>{listItem.title}</b><i class="material-icons right">more_vert</i></h1>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">{listItem.title}<i class="material-icons right">close</i></span>
                                <p>{listItem.summary}</p>
                                <p><a href={listItem.link} target="_blank">Visit</a></p>
                            </div>
                        </div>

                    </Col>
                </Row>
            )}
        </Row>
    )
}

export default ProjectCards;

{/* <div className="contain mr-2 ml-2 mt-5 mb-8">
                            <img className="projectsPic" src={listItem.img} alt={listItem.alt} />
                            <div className="centered">
                                <h1>{listItem.title}</h1>
                                <p>{listItem.summary}</p>
                                <a href={listItem.link}>Learn More</a>
                            </div>
                        </div> */}


{/* <Row>
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
                            <h1>Google Books Search</h1>
                            <p>This App is used to search and save books from the entire Google Books library.</p>
                            <a href="https://morning-inlet-35060.herokuapp.com/">Learn More</a>
                        </div>
                    </div>
                </Col>
            </Row> */}