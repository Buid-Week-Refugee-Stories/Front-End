import React from 'react';

function StoryBox( { story }) {

  const date = new Date(story.created_at);
  
  return (
    <div> 
      <h2 className='title'>{story.story_title}</h2>

      {story.author? 
      <h3>By {story.author}</h3>: null }

      {story.location?
      <h3>Located in {story.location}</h3>: null }

      <h3>Written on {date.toDateString()}</h3>
      <p className='textContent'>{story.story_description}</p>
    </div>
  );
}
  
  export default StoryBox;