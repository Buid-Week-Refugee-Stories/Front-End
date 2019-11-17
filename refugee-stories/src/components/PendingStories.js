import React from 'react';
import StoryCardForGrid from './StoryCardForGrid';
import AdminForm from './AdminForm';

function PendingStories( {stories, modifyStory}) {
    const unapproved = stories.filter(story => !story.approved_story);
    return (
      <div> 
        <h2>Pending Stories</h2>
        {unapproved.map( story => (
          <div key={story.id}>
            <AdminForm story={story} modifyStory={modifyStory}/>
            <StoryCardForGrid story={story} />
          </div>
        ))
        }
      </div>
    );
  }
  
  export default PendingStories;