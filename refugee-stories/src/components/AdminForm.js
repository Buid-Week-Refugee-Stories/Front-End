import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from './axiosWithAuth.js';
import { Button, ButtonGroup } from 'reactstrap';

function AdminForm( props ) {

  const { story, history, deleteStory } = props;
  console.log("props from admin",props)

  const [storyToApprove, setStoryToApprove] = useState(story);

  const approveStory = (e) => {
    setStoryToApprove({...storyToApprove, approved_story: true});
  }

  // console.log("Story to approve update",storyToApprove);

  useEffect(() => {
    axiosWithAuth().put(`https://bw-refugees.herokuapp.com/stories/${story.id}`, storyToApprove)
      .then(res => {
        // history.push('/stories'); // Redirect to stories list
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      })
  }, [storyToApprove]);

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