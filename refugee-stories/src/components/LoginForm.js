import React, { useState } from 'react';
import welcome from '../images/welcome.jpg';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
        localStorage.setItem('token', res.data.token);
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
        <h1 className='mainH1'>Log in to Refugee Stories</h1> 
        <Form onSubmit={submitForm} className='forms'>
          <FormGroup>
            <Label htmlFor="username">Username: </Label>
            <Input type='text' 
              name='username' 
              value={userInput.username} 
              id='username' 
              placeholder='Enter username'
              onChange={handleChange}
              required
             /><br />
          </FormGroup>

          <FormGroup>
            <Label htmlFor='password'>Password: </Label>
            <Input type='password' 
              name='password' 
              value={userInput.password} 
              id='password'
              placeholder='Enter password'
              onChange={handleChange}
              required /><br />
          </FormGroup>

            <Button type='submit' size='lg' color='warning' style={{width: '50%', margin: 'auto'}}>Log In</Button>
        </Form>
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