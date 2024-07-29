import React from "react";
import profilePic from "../../images/profilePic.jpg";
import "./About.scss";
import '../../_styles.scss';

function About() {
  return (
    <div className="about-container">
      <h1 style={{fontFamily:"lato-regular", marginBottom: "30px"}}>About me</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi there!
          </p>
          <br/>
          <p>
          I’m Altin Syla, a Web Developer and Data enthusiast passionate about building responsive, dynamic websites and leveraging data to drive decision-making. With 1 year of experience in the field, I’ve had the opportunity to work on various projects, transforming ideas into functional, data-driven web applications.
          </p>
          <br/>
          <p>
            Feel free to explore my portfolio to see some of the projects I’ve had the privilege to work on. If you’re looking for a dedicated web developer who combines a keen eye for design with strong data analytical skills, let’s connect! 
          </p>
          <br/>
          <p>
          I’d love to collaborate on your next project.
          </p>
        </div>
        <div className="about-image">
          <img src={profilePic} alt="Altin Syla" />
        </div>
      </div>
    </div>
  );
}

export default About;
