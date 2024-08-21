import React from 'react';
import '../Home/Home.scss';
import myphoto from '../../images/myphoto.jpg';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();
  const handleScroll = (event, section) => {
    event.preventDefault();
    navigate("/");
    setTimeout(() => {
      document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    }, 100); 
  };

  return (
    <div>
      <div className='home-container' id="home">
        <div>
          <hr style={{ marginBottom: "30px" }} />
          <img src={myphoto} alt='myphoto' className='myphoto' />
          <hr style={{ marginTop: "30px" }} />
        </div>
        <div className='text-container'>
          <p><span className='highlight'>Hi!</span> I'm <span className='highlight'>Altin</span></p>
          <p>a<span className='highlight'> Web Developer</span></p>
          <Link to="/contact" className="contact-button" onClick={(event) => handleScroll(event, "contact")} style={{textDecoration: 'none'}}>Contact</Link>
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </div>
  );
}

export default Home;
