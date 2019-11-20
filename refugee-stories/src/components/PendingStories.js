import React, { useEffect } from 'react';
import StoryCardForGrid from './StoryCardForGrid';
import AdminForm from './AdminForm';
import welcomeWall from '../images/welcomeWall.jpg';
import { connect } from 'react-redux';
import { fetchStories } from '../actions';

function PendingStories({ fetchStories, stories }) {

  // Fetch stories data on load from redux store.
  useEffect(() => {
    fetchStories();
  }, []);

  // Show stories that have not been approved yet
  const unApprovedStories = stories.filter(story => !story.approved_story);

  return (
    <div>
      <h1 className='mainH1'>Pending Stories</h1>
      <div className="cardContainer" >
        {unApprovedStories.map(story => (
          <div key={story.id} className='storyContainer'>
            <AdminForm story={story} />
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


// export default PendingStories;
const mapStateToProps = (state) => {
  return {
    stories: state.stories,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { fetchStories })(PendingStories);