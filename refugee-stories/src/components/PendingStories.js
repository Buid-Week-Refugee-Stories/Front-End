import React, { useEffect } from 'react';
import StoryCardForGrid from './StoryCardForGrid';
import AdminForm from './AdminForm';
import welcomeWall from '../images/welcomeWall.jpg';
import { connect } from 'react-redux';
import { fetchStories, deleteStory } from '../actions';
import { Tween } from 'react-gsap';


function PendingStories(props) {

  // Fetch stories data on load from redux store.
  useEffect(() => {
    props.fetchStories();

  }, []);

  if (!props.stories.length || !props.stories) {
    return <h2>No stories to check</h2>;
  }

  return (
    <div>
      <Tween from={{ scale: 0 }}>
        <h1 className='mainH1'>Pending Stories</h1>
      </Tween>

      {props.isFetching && (<h2 className="loading">Loading data...</h2>)}
      {props.isDeleting && (<h2 className="loading">Deleting data...</h2>)}

      {!props.isDeleting && !props.isFetching && <div className="cardContainer" >
        {props.stories.map(story => {
          if (!story.approved_story) {
            return (
              <div key={story.id} className='storyContainer'>
                <AdminForm fetchStories={props.fetchStories} story={story} history={props.history} deleteStory={props.deleteStory} />
                <StoryCardForGrid story={story} />
              </div>
            )
          }
        })}
      </div>}

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
    isFetching: state.isFetching,
    isDeleting: state.isDeleting
  }
}

export default connect(mapStateToProps, { fetchStories, deleteStory })(PendingStories);