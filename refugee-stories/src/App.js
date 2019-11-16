import React from 'react';
import { Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import LoginForm from './components/LoginForm';
import Stories from './components/Stories';
import About from './components/About';
import SubmissionForm from './components/SubmissionForm';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/login' component={LoginForm} />
      <Route path='/stories' component={Stories} />
      <Route path='/submission' component={SubmissionForm} />
    </div>
  );
}

export default App;
