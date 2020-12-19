import React from 'react';
import "../styles/Footer.css"
import Avatar from '../assets/Avatar.JPG';

function Footer() {
  return (
    <footer>
    <div className="container-fluid" id="content">
      <img src= { Avatar } class="bottom-logo "></img>
      <div className="link-btns row">
        <a className="gitBtn fab fa-github fa-2x ml-5 mr-5" href="https://github.com/SAR-SA" target="_blank" alt="Github logo"></a>
        <a className="liBtn fab fa-linkedin-in fa-2x ml-5 mr-5"
          href="https://www.linkedin.com/in/shawn-a-rather-9a37ba56/" target="_blank" alt="LinkedIn logo"></a>
        <a className="emBtn far fa-envelope fa-2x ml-5 mr-5" href="mailto:SARSA.web@gmail.com" alt="Email logo"></a>
      </div>
      <h6>"The past can talk to the future...if the present has ears to hear and eyes to see with." -Alfred Pennyworth</h6>
      <p className="copyright"><b>Designed & Built by me </b><i class="far fa-copyright"> 2020</i></p>
    </div>
    </footer>
  )
}

export default Footer