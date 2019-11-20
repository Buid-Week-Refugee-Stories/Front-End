import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from './axiosWithAuth.js';
import { Button, ButtonGroup } from 'reactstrap';

function AdminForm( props ) {

  const { story } = props;

  const [storyToApprove, setStoryToApprove] = useState(story);

  console.log("Story to approve",storyToApprove);
  console.log("Story from redux",story);

  const approveStory = (e) => {
    setStoryToApprove({...storyToApprove, approved_story: true});
  }

  // console.log("Story to approve update",storyToApprove);

  useEffect(() => {
    axiosWithAuth().put(`https://bw-refugees.herokuapp.com/stories/${story.id}`, storyToApprove)
      .then(res => {
        // props.history.push('/stories'); // Redirect to stories list
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      })
  }, [storyToApprove]);

  const deleteStory = (e) => {

    // console.log(story.id);

    axiosWithAuth().delete(`https://bw-refugees.herokuapp.com/stories/${story.id}`)
      .then(res => {
        console.log(res)
        props.history.push('/stories'); // Redirect to stories list
      })
      .catch(err => {
        console.log(err);
      })

  }

  return (
    <div className="approval-buttons">
      <ButtonGroup>
        <Button size='lg' color='success' onClick={approveStory}>Approve</Button>
        <Button size='lg' color='warning' onClick={deleteStory}>Reject</Button>
      </ButtonGroup>
    </div>
  );
}

// export default connect(mapStateToProps, { approveStory })(AdminForm);
export default AdminForm;