import React from 'react';
import StoryCardForGrid from './StoryCardForGrid';

function Stories( { stories }) {
    
    const approvedStories = stories.filter(story=> story.approved_story);
    return (
      <div> 
        <h2>Refugee Stories</h2>
        {approvedStories.map( story => (
          <StoryCardForGrid story={story} key={story.id} />
        ))
        }
      </div>
    );
  }
  
  export default Stories;