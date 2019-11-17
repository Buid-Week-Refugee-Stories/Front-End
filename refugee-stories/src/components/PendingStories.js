import React from 'react';
import StoryCardForGrid from './StoryCardForGrid';
import AdminForm from './AdminForm';
import welcomeWall from '../images/welcomeWall.jpg';

function PendingStories( {stories, modifyStory, deleteStory}) {
    const unapproved = stories.filter(story => !story.approved_story);
    return (
      <div> 
        <h2>Pending Stories</h2>
        <div className="cardContainer" >
          {unapproved.map( story => (
            <div key={story.id} className='storyContainer'>
              <AdminForm story={story} modifyStory={modifyStory} deleteStory={deleteStory}/>
              <StoryCardForGrid story={story} />
            </div>
          ))
          }
        </div>

        <div className='imgContainer'>
          <img src={welcomeWall} alt='everyone is welcome banner on wall' />
        </div>
      </div>
    );
  }
  
  export default PendingStories;