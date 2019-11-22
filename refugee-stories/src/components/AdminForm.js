import React from 'react';
import {axiosWithAuth} from './axiosWithAuth.js';
import { Button, ButtonGroup } from 'reactstrap';

function AdminForm( props ) {

  const { story, deleteStory, fetchStories } = props;

  const approveStory = (e) => {

    const approvedStory = {
      id: story.id,
      author: story.author,
      location: story.location,
      created_at: story.created_at,
      story_title: story.story_title,
      story_description: story.story_description,
      approved_story: true
    }

    console.log('approvedStory', approvedStory);
    axiosWithAuth().put(`https://bw-refugees.herokuapp.com/stories/${story.id}`, approvedStory)
      .then(res => {

        console.log("PUT success", res.data)
      })
      .then(() => fetchStories()) // Second fetch call for re-render.
      .catch(err => {
        console.log(err);
      })
  }

  // Delete 
  const deleteTheStory = () => {
    console.log('deleted', story)
    deleteStory(story);
  }

  return (
    <div className="approval-buttons">
      <ButtonGroup>
        <Button size='lg' color='success' onClick={approveStory}>Approve</Button>
        <Button size='lg' color='warning' onClick={deleteTheStory}>Reject</Button>
      </ButtonGroup>
    </div>
  );
}

// export default connect(mapStateToProps, { approveStory })(AdminForm);
export default AdminForm;