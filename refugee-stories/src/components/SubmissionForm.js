import React from 'react';

function SubmissionForm() {
  return (
    <div>
      <form>
          <label htmlFor="story_title">Title: </label>
          <input type='text' name='story_title' id='story_title' placeholder='title'/>
      </form>
    </div>
  );
}

export default SubmissionForm;