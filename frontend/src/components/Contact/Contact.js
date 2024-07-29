import React from 'react';
import '../Contact/Contact.scss';
import '../../../src/_styles.scss';
import linkedin from '../../images/linkedin.svg';
import github from '../../images/github.svg';
import gmail from '../../images/gmail.svg';

function Contact() {
  return (
    <div className='contact-container'>
      <h1 style={{ fontFamily: "lato-regular" }}>Contact</h1>
      <div className="skillsgrid-container">
        <a href="https://www.linkedin.com/in/altin-syla-00739a238/" target="_blank" rel="noopener noreferrer" className="contact-items" style={{textDecoration:"none", color: "black"}}>
          <img src={linkedin} className='contact-icons' alt='linkedin-icon' />
          <p style={{ fontFamily: "lato-bold" }}>LinkedIn</p>
        </a>
        <a href="https://github.com/altinsyla" target="_blank" rel="noopener noreferrer" className="contact-items" style={{textDecoration:"none", color: "black"}}>
          <img src={github} className='contact-icons' alt='github-icon' />
          <p style={{ fontFamily: "lato-bold" }}>GitHub</p>
        </a>
        <a href="mailto:altinsyla11@gmail.com" className="contact-items" style={{textDecoration:"none", color: "black"}}>
          <img src={gmail} className='contact-icons' alt='gmail-icon' />
          <p style={{ fontFamily: "lato-bold" }}>Gmail</p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
