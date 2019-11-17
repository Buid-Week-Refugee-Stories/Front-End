import React from 'react';

function StoryBox( { story }) {
    return (
      <div> 
        <h2>{story.story_title}</h2>
        <h3>By {story.author}</h3>
        <h3>Located in {story.location}</h3>
        <h3>Written on {story.date}</h3>
        <p>{story.story_description}</p>
      </div>
    );
  }
  
  export default StoryBox;