import React, { useState } from 'react';
import welcome from '../images/welcome.jpg';
import axios from 'axios';

function LoginForm(props) {

  const [userInput, setUserInput] = useState({
    username: '',
    password: ''
  })

  function handleChange(e) {
    setUserInput({...userInput, [e.target.name]: e.target.value});
  }

  function submitForm(e) {
    e.preventDefault();

    axios.post('https://bw-refugees.herokuapp.com/auth/login', userInput)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.token);
        props.history.push('/pending');
      })
      .catch(err => {
        console.log("Login error:",err);
      })

      setUserInput({
        ...userInput,
        username: '',
        password: ''
      });
  }

  return (
    <div>
      <div> 
        <h2> Log In To Refugee Stories</h2>
        <form onSubmit={submitForm}>
            <label htmlFor="username">Username: </label>
            <input type='text' 
              name='username' 
              value={userInput.username} 
              id='username' 
              placeholder='Enter username'
              onChange={handleChange}
              required/><br />

            <label htmlFor='password'>Password: </label>
            <input type='password' 
              name='password' 
              value={userInput.password} 
              id='password'
              placeholder='Enter password'
              onChange={handleChange}
              required /><br />

            <button type='submit'>Log In</button>
        </form>
        </div>
        {/* <div>
          <h2>Welcome back, {userInput.username}.</h2>
          <p>You are logged in.</p>
          <p> You may now approve and delete pending stories.</p>
        </div> */}
        
        <div className='imgContainer'>
          <img src={welcome} alt='building with refugees welcome banner' />
        </div>
      </div>
  )};

export default LoginForm;