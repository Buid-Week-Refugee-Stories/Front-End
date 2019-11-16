import React, {useState, useEffect} from 'react';
import { Route} from 'react-router-dom'
import './App.css';

import Home from './components/Home'
import LoginForm from './components/LoginForm';
import Stories from './components/Stories';
import About from './components/About';
import SubmissionForm from './components/SubmissionForm';
import Nav from './components/Nav';
import StoryCard from './components/StoryCard';

import data from './data';

function App() {
  //Note: Once we have an endpoint for out data, use useState([]) for stories and users.
  const [stories, setStories] = useState(data[1].stories);
  const [pendingStories, setPendingStories] = useState([]);
  const [users, setUsers] = useState(data[0].users);
  
  /*
  useEffect (() => {
    axios.get(`https://endpointGoesHere)
    .then(res => {
      setStories(res.data.stories);
      setUsers(res.data.users);
    }
    .catch(err => console.log(err);  
  }, []);
  */
  console.log(users);
  console.log(stories);

  const addNewStory = story => {
    const newStory = {
      id: Date.now(),
      author: story.author,
      location: story.location,
      date: Date.now(),
      story_title: story.story_title,
      story_text: story.story_text
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
