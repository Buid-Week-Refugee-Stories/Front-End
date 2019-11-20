import React, { useEffect } from 'react';
import StoryCardForGrid from './StoryCardForGrid';
import children from '../images/children.jpg';
import { connect } from 'react-redux';
import { fetchStories } from '../actions';
import { Tween } from 'react-gsap';

function Stories({ stories, fetchStories }) {

  // Fetch stories data on load from redux store.
  useEffect(() => {
    fetchStories();
  }, []);
  
  const approvedStories = stories.filter(story => story.approved_story);

  if (!stories.length || !stories) {
    return <h2>Loading item data...</h2>;
  }

  return (
    <div>
      <Tween from={{ scale: 0}}>
        <h1 className='mainH1'>Refugee Stories</h1>
      </Tween>

      <div className='cardContainer'>
        {approvedStories.map(story => (
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

const mapStateToProps = (state) => {
  return {
    stories: state.stories,
    isFetching: state.isFetching
  }
}

// export default Stories;
export default connect(mapStateToProps, { fetchStories })(Stories);