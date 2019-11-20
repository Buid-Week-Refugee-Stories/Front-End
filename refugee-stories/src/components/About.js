import React from 'react';
import handsTogether from '../images/handsTogether.jpg';
import { Tween } from 'react-gsap';

function About() {
    return (
      <div>
        <Tween from={{ scale: 0}}> 
          <h1 className='mainH1'>About Us</h1>
        </Tween>
        <p className='homeText'>Refugee Stories Group</p>
        <div className='imgContainer'>
          <img src={handsTogether} alt='hands together' />
        </div>
      </div>
    );
  }
  
  export default About;