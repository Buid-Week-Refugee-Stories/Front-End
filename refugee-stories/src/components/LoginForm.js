import React, { useState } from 'react';
import welcome from '../images/welcome.jpg';

function LoginForm( {findUser, loggedIn}) {
  const [userInput, setUserInput] = useState({
    username: '',
    password: ''
  })

  function handleChange(e) {
    setUserInput({...userInput, [e.target.name]: e.target.value});
  }

  function submitForm(e) {
    e.preventDefault();
    findUser(userInput);
  }

  return (
    <div>
      {!loggedIn?
      <div> 
        <h2> Log In To Refugee Stories</h2>
        <form onSubmit={submitForm}>
            <label htmlFor="username">Username: </label>
            <input type='text' 
              name='username' 
              value={userInput.username} 
              id='username' 
              placeholder='username'
              onChange={handleChange}
              required/><br />

            <label htmlFor='password'>Password: </label>
            <input type='password' 
              name='password' 
              value={userInput.password} 
              id='password'
              placeholder='********'
              onChange={handleChange}
              required /><br />

            <button type='submit'>Log In</button>
        </form>
        </div>
      : <div>
          <h2>Welcome back, {userInput.username}.</h2>
          <p>You are logged in.</p>
          <p> You may now approve and delete pending stories.</p>
        </div>}
        
        <div className='imgContainer'>
          <img src={welcome} alt='building with refugees welcome banner' />
        </div>
      </div>
  )};

export default LoginForm;