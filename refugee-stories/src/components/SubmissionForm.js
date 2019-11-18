import React, { useState } from 'react';
import refugees from '../images/refugees.jpg';


function SubmissionForm(props) {
  const [story, setStory] = useState({
    author: '',
    location: '',
    story_title: '',
    story_description: ''
  });

  const handleChange = e => {
    setStory({ ...story, [e.target.name]: e.target.value });
  }

  const submitForm = e => {
    e.preventDefault();
    props.addNewStory(story);
    setStory({
      author: '',
      location: '',
      story_title: '',
      story_description: ''
    });
    console.log('submitted');
  }

  return (
    <div>
      <h2>Submit Your Story</h2>
      <form onSubmit={submitForm}>
        <label htmlFor='author'>Your name: </label>
        <input type='text'
          name='author'
          id='author'
          placeholder='your name'
          onChange={handleChange}
          value={story.author} /><br />

        <label htmlFor='location'>Your location: </label>
        <input type='text'
          name='location'
          id='location'
          placeholder='your location'
          onChange={handleChange}
          value={story.location} /><br />

        <label htmlFor='story_title'>Title: </label>
        <input type='text'
          name='story_title'
          id='story_title'
          placeholder='title'
          onChange={handleChange}
          value={story.story_title}
          required />
        <br />

        <label htmlFor='story_description'>Story: </label><br />
        <textarea
          name='story_description'
          id='story_description'
          placeholder='your story here'
          onChange={handleChange}
          value={story.story_description}
          required /><br />

        <button type='submit'>Submit Story</button>

      </form>

      <div className="imgContainer">
        <img src={refugees} alt='refugees standing at a seashore' />
      </div>
    </div>
  );
}

export default SubmissionForm;