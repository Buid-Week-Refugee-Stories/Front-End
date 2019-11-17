import React from 'react';
import StoryBox from './StoryBox';

function StoryCard( props ) {
    
    const story = props.stories.find( story => story.id === Number(props.match.params.storyID));
    return (
      <div className='storyContainer'> 
        <StoryBox story={story} />
      </div>
    );
  }
  
  export default StoryCard;