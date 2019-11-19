import React, { useEffect } from 'react';
import StoryCardForGrid from './StoryCardForGrid';
import children from '../images/children.jpg';
import { connect } from 'react-redux';
import { fetchStories } from '../actions';

function Stories({ stories, fetchStories }) {

  // const approvedStories = stories.filter(story => story.approved_story);

  // Fetch stories data on load from redux store.
  useEffect(() => {
    fetchStories();
  }, []);

  console.log("Stories from reducer:", stories);
  return (
    <div>
      <h1 style={{textAlign: 'center', marginTop: '4rem'}}>Refugee Stories</h1>

      <div className='cardContainer'>
        {stories.map(story => (
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