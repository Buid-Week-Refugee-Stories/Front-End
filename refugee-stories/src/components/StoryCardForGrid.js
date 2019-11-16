import React from 'react';
import { Link } from 'react-router-dom';

function StoryCardForGrid( { story }) {
    return (
      <div>
        <Link key={story.id} to={`/stories/${story.id}`}> 
        <h2>{story.story_title}</h2>
        <h3>By {story.author}</h3>
        <h3>Written on {story.date}</h3>
        <p>{story.story_text}</p>
        </Link>
      </div>
    );
  }
  
  export default StoryCardForGrid;