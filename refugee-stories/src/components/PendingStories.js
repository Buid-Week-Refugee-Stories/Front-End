import React, {useEffect} from 'react';
import StoryCardForGrid from './StoryCardForGrid';
import AdminForm from './AdminForm';
import welcomeWall from '../images/welcomeWall.jpg';
import { fetchStories} from '../actions';
import { connect } from 'react-redux';

function PendingStories({ fetchStories, stories }) {

  // Fetch stories data on load from redux store.
  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <div>
      <h2>Pending Stories</h2>
      <div className="cardContainer" >
        {stories.map(story => (
          <div key={story.id} className='storyContainer'>
            {/* <AdminForm story={story} modifyStory={modifyStory} deleteStory={deleteStory} /> */}
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

const mapStateToProps = (state) => {
  return {
    stories: state.stories,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { fetchStories })(PendingStories);