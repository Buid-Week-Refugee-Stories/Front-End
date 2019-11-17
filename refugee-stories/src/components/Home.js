import React from 'react';
import { Link } from 'react-router-dom';
import refugeesMosaic from '../images/refugeesMosaic.jpg';

function Home() {
  return (
    <div>
      <h1>Refugee Stories</h1>
      <h2><Link to='/stories' className='inlineLink'>Learn</Link> about the lives of refugees.</h2>
      <h2><Link to='/submission' className='inlineLink'>Share</Link> your stories.</h2>
      <div className='imgContainer'>
        <img src={refugeesMosaic} alt='refugees Mosaic' />
      </div>
    </div>
  );
}

export default Home;
