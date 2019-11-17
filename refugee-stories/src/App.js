import React, {useState, useEffect} from 'react';
import { Route} from 'react-router-dom'
import './App.css';
import axios from 'axios';

import Home from './components/Home'
import LoginForm from './components/LoginForm';
import Stories from './components/Stories';
import About from './components/About';
import SubmissionForm from './components/SubmissionForm';
import Nav from './components/Nav';
import StoryCard from './components/StoryCard';

import data from './data';

function App() {
  const [stories, setStories] = useState([]); //useState(data[1].stories) for my mock data
  const [pendingStories, setPendingStories] = useState([]);
  const [users, setUsers] = useState([]); //useState(data[0].users); for my mock data
  
  
  useEffect (() => {
    axios.get(`https://bw-refugees.herokuapp.com/stories`)
    .then(res => {
      setStories(res.data);
      //console.log(res.data)
    })
    .catch(err => console.log(err));  
  }, []);

  useEffect(() => {
    axios.get(`https://bw-refugees.herokuapp.com/users`)
    .then(res => {
      setUsers(res.data);
      //console.log(res.data);
    })
  }, []);
  
  //console.log(users);
  //console.log(stories);

  const addNewStory = story => {
    const newStory = {
      id: Date.now(),
      author: story.author,
      location: story.location,
      created_at: Date.now(),
      story_title: story.story_title,
      story_description: story.story_text,
      approved_story: false
    }
    setStories([...stories, newStory]);
  }

  return (
    <div>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/login' component={LoginForm} />
      <Route exact path='/stories' render={({props}) => <Stories {...props} stories={stories}/>} />
      <Route path='/submission' render={({props}) => <SubmissionForm {...props} addNewStory={addNewStory}/>} />
      <Route exact path='/stories/:storyID' render={ props => <StoryCard {...props} stories={stories}/>} />
    </div>
  );
}

export default App;
