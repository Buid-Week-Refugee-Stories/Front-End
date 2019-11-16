import React from 'react';
import StoryBox from './StoryBox';

function StoryCard( props ) {
    
    const story = props.stories.find( story => story.id === props.match.params.storyID);
    return (
      <div> 
        <StoryBox story={story} />
      </div>
    );
  }
  
  export default StoryCard;