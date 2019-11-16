import React, { useState } from 'react';

function SubmissionForm() {
  const [story, setStory] = useState( {
    author: '',
    location: '',
    story_title: '',
    story_text: ''
  });

  const handleChange = e => {
    setStory({...story, [e.target.name]: e.target.value});
  }


  return (
    <div>
      <h2>Submit Your Story</h2>
      <form>
        <label htmlFor='author'>Your name: </label>
        <input type='text'
          name='author'
          id='author'
          placeholder='your name'
          onChange={handleChange}
          value={story.author}/><br />

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
          value={story.story_title}/><br />

        <label htmlFor='story_text'>Story: </label>
        <input type='textarea'
          name='story_text'
          id='story_text'
          placeholder='your story here'
          onChange={handleChange}
          value={story.story_text} /><br />


      </form>
    </div>
  );
}

export default SubmissionForm;