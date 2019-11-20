import React from 'react';
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

function App() {

  return (
    <div>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/login' component={LoginForm} />
      <Route exact path='/stories' component={Stories} />
      <Route path='/submission' component={SubmissionForm} />
      <Route exact path='/stories/:storyID' component={StoryCard} />
      <PrivateRoute path='/pending' component={PendingStories} />
      <Footer />
    </div>
  );
}

export default App;
