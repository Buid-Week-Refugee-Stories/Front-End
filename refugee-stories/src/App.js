import React, {useState} from 'react';
import { Route} from 'react-router-dom'
import './App.css';
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

  return (
    <div>
      <Nav />

      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/login' component={LoginForm} />
      <Route exact path='/stories' component={Stories} />
      <Route path='/submission' render={({props}) => <SubmissionForm {...props} addNewStory={addNewStory}/>} />
      <Route exact path='/stories/:storyID' component={StoryCard} />
      <PrivateRoute path='/pending' component={PendingStories} />
      <Footer />
    </div>
  );
}

export default App;
