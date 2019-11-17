import React from 'react';
import StoryCardForGrid from './StoryCardForGrid';

function Stories( { stories }) {
    //TODO: Add filter so only approved stories are shown.
    //All the mock data for now have 'approved_story: false',
    // so I don't want to put the filter on yet.
    return (
      <div> 
        <h2>Refugee Stories</h2>
        {stories.map( story => (
          <StoryCardForGrid story={story} key={story.id} />
        ))
        }
      </div>
    );
  }
  
  export default Stories;