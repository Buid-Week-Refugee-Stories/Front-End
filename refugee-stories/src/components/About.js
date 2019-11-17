import React from 'react';
import handsTogether from '../images/handsTogether.jpg';

function About() {
    return (
      <div> 
        <h1>About Us</h1>
        <p>To be replaced with Jasmine's About Us Page</p>
        <div className='imgContainer'>
          <img src={handsTogether} alt='hands together' />
        </div>
      </div>
    );
  }
  
  export default About;