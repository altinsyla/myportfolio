import React from 'react';
import '../Home/Home.scss';
import NavigationBar from '../NavigationBar/NavigationBar';
import myphoto from '../../images/myphoto.jpg';

function Home() {
  return (
    <div>
      <NavigationBar />
      <div className='home-container'>
        <div>
        <hr style={{ marginBottom: "50px" }} />
        <img src={myphoto} alt='myphoto' className='myphoto' />
        <hr style={{ marginTop: "50px" }} />
        </div>
        <div className='text-container'>
          <p><span className='highlight'>Hi!</span> I'm <span className='highlight'>Altin</span></p>
          <p>a<span className='highlight'> Web Developer</span></p>
          <button className='contact-button'>Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
