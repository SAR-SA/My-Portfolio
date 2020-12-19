import React from 'react';
import "../styles/AboutPic.css";
import pic from '../assets/Image1.JPG'


const AboutPic = () => {
	return ( 
        <div className="pic-container animate__animated animate__fadeInLeft" >
            <img id="picMe" src={pic} alt="Shawn Rather Pic"/>
        </div>
    );
}

export default AboutPic;