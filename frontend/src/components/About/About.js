import React from "react";
import profilePic from "../../images/profilePic.jpg";
import "./About.scss";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi there! I’m Altin Syla, a web development and data enthusiast passionate about building responsive, dynamic websites and leveraging data to drive decision-making. With 1 year of experience in the field, I’ve had the opportunity to work on various projects, transforming ideas into functional, data-driven web applications.
          </p>
          <p>
            Feel free to explore my portfolio to see some of the projects I’ve had the privilege to work on. If you’re looking for a dedicated web developer who combines a keen eye for design with strong data analytical skills, let’s connect! I’d love to collaborate on your next project.
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
