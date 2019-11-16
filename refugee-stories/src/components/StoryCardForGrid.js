import React from 'react';
import { Link } from 'react-router-dom';
import StoryBox from './StoryBox';

function StoryCardForGrid( { story }) {
    return (
      <div>
        <Link key={story.id} to={`/stories/${story.id}`}> 
            <StoryBox story={story} />
        </Link>
      </div>
    );
  }
  
  export default StoryCardForGrid;