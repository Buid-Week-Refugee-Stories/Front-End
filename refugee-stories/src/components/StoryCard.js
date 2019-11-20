import React, { useEffect } from 'react';
import StoryBox from './StoryBox';
import { connect } from 'react-redux';
import { fetchStories } from '../actions';

function StoryCard(props) {

  const { stories, fetchStories, isFetching } = props;

  // Fetch stories data on load from redux store.
  useEffect(() => {
    fetchStories();
  }, []);

  const story = stories.find(story => story.id === Number(props.match.params.storyID));
  
  // Wait for data to load before moving forward.
  if (!stories.length || !stories) {
    return <h2>Loading item data...</h2>;
  }

  return (
    <>
      <h1 className='mainH1'>Refugee Story</h1>
      {!isFetching && <StoryBox story={story} />}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    stories: state.stories,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { fetchStories })(StoryCard);