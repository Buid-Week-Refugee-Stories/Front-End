import React from 'react';
import StoryCardForGrid from './StoryCardForGrid';
import children from '../images/children.jpg';

function Stories( { stories }) {
    
    const approvedStories = stories.filter(story=> story.approved_story);
    return (
      <div> 
        <h1>Refugee Stories</h1>
        <div className='cardContainer'>
          {approvedStories.map( story => (
            <div className="storyContainer" key={story.id} >
            <StoryCardForGrid story={story} />
            </div>
          ))
          }
        </div>

        <div className='imgContainer'>
          <img src={children} alt='refugee children' />
        </div>
      </div>
    );
  }
  
  export default Stories;