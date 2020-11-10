import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Intro.css";
import { Button } from "react-bootstrap";



const Intro = () => {
    return (
        <div>
        <div className="introDiv">
            <div introContent>
                <h1 className="introTitle animate__animated animate__backInDown">WELCOME</h1>
                <h1 className="introName introTitle animate__animated animate__fadeIn">My Name is Shawn A. Rather</h1>
                <h2 className="introSummary introTitle animate__animated animate__flipInX">I'm a full stack web developer</h2>
                {/* <a href="/about" className="introButton ">View my Work</a> */}
                <div className="introButton animate__animated animate__backInUp">
                <Link to="/about">
                <Button variant="danger">See my Work</Button>
                </Link>
               
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default Intro;