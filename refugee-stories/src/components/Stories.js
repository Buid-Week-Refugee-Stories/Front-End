import React from 'react';
import StoryCardForGrid from './StoryCardForGrid';

function Stories( { stories }) {
    return (
      <div> 
        <h2>Refugee Stories</h2>
        {stories.map( story => (
          <StoryCardForGrid story={story} />
        ))
        }
      </div>
    );
  }
  
  export default Stories;