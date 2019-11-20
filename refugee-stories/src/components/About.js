import React from 'react';
import handsTogether from '../images/handsTogether.jpg';

function About() {
    return (
      <div> 
        <h1 className='mainH1'>About Us</h1>
        <p className='homeText'>Refugee Stories Group</p>
        <div className='imgContainer'>
          <img src={handsTogether} alt='hands together' />
        </div>
      </div>
    );
  }
  
  export default About;