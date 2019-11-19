import React, {useState, useEffect} from 'react';
import { Route} from 'react-router-dom'
import './App.css';
import axios from 'axios';
import PrivateRoute from './components/PrivateRoute';

import Home from './components/Home'
import LoginForm from './components/LoginForm';
import Stories from './components/Stories';
import About from './components/About';
import SubmissionForm from './components/SubmissionForm';
import Nav from './components/Nav';
import StoryCard from './components/StoryCard';
import PendingStories from './components/PendingStories';
import Footer from './components/Footer';

//import data from './data';

function App() {
  const [stories, setStories] = useState([]); //useState(data[1].stories) for my mock data
  const [users, setUsers] = useState([]); //useState(data[0].users); for my mock data

  // useEffect(() => {
  //   axios.get(`https://bw-refugees.herokuapp.com/users`)
  //   .then(res => {
  //     setUsers(res.data);
  //     //console.log(res.data);
  //   })
  // }, []);
  
  //console.log(users);
  //console.log(stories);

  const addNewStory = story => {
    const newStory = {
      id: Date.now(),
      author: story.author,
      location: story.location,
      created_at: Date.now(),
      story_title: story.story_title,
      story_description: story.story_description,
      approved_story: false
    }
    setStories([...stories, newStory]);
    console.log('In addNewStory');
    console.log(newStory);
    console.log(stories);
  }

  const modifyStory = story => {
    const storyToModify = stories.find(item => item.id === story.id);
    //Make a copy of the story, with its approved_story set to true.

    //Note: Later, if we want to add functionality to modify other fields, we
    //could add another parameter to this function of which prop to modify.
    const editedStory = {
        id: storyToModify.id,
        author: storyToModify.author,
        location: storyToModify.location,
        created_at: storyToModify.created_at,
        story_title: storyToModify.story_title,
        story_description: storyToModify.story_description,
        approved_story: true
      }
    //console.log(editedStory);
    //Get all the stories, besides the edited one.
    let restOfStories = stories.filter(item => item.id !== storyToModify.id);
    //Add the edited one to the stories array and set it as state.
    restOfStories.unshift(editedStory);
    setStories(restOfStories);
  }

  function deleteStory(story) {
    const storiesToKeep = stories.filter(item => item.id !== story.id);
    setStories(storiesToKeep);
  }

  return (
    <div>
      <Nav />

      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/login' component={LoginForm} />
      <Route exact path='/stories' component={Stories} />
      <Route path='/submission' render={({props}) => <SubmissionForm {...props} addNewStory={addNewStory}/>} />
      <Route exact path='/stories/:storyID' render={ props => <StoryCard {...props} stories={stories}/>} />
      {/* <Route path='/pending' render={({props}) => <PendingStories {...props} stories={stories} modifyStory={modifyStory} deleteStory={deleteStory}/>} /> */}
      <PrivateRoute path='/pending' component={PendingStories} />
      <Footer />
    </div>
  );
}

export default App;
