import React from 'react';
import handsTogether from '../images/handsTogether.jpg';

function About() {
    return (
      <div style={{textAlign: 'center'}}> 
        <h1>About Us</h1>
        <p>Refugee Stories Group</p>
        <div className='imgContainer'>
          <img src={handsTogether} alt='hands together' />
        </div>
      </div>
    );
  }
  
  export default About;