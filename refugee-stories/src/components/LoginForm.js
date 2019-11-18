import React from 'react';
import welcome from '../images/welcome.jpg';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

function LoginForm( { values, errors, touched, props, loggedIn}) {
  
  return (
    <div>
      {!loggedIn?
      <div> 
        <h2> Log In To Refugee Stories</h2>
        <Form>
            <label htmlFor="username">Username: </label>
            <Field type='text' 
              name='username'  
              placeholder='username'
              />
              {touched.username && errors.username && (<p>{errors.username}</p>)}
              <br />

            <label htmlFor='password'>Password: </label>
            <Field type='password' 
              name='password' 
              placeholder='********'
              />
              {touched.password && errors.password && (<p>{errors.password}</p>)}
              <br />

            <button type='submit'>Log In</button>
        </Form>
        </div>
      : <div>
          <h2>Welcome back, {values.username}.</h2>
          <p>You are logged in.</p>
          <p> You may now approve and delete pending stories.</p>
        </div>}
        
        <div className='imgContainer'>
          <img src={welcome} alt='building with refugees welcome banner' />
        </div>
      </div>
  )};

const FormikLoginForm = withFormik({
  mapPropsToValues ( {username, password}) {
    return {
      username: username || '',
      password: password || ''
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().min(3, 'Username is too short')
      .max(25, 'Username is too long')
      .required('Username is required'),
    password: Yup.string().min(6, 'Password is too short')
      .max(25, 'Password is too long')
      .required('Password is required to log in.')
  }),
  handleSubmit(values, tools) {
    console.log(values);
    tools.props.findUser(values);
    tools.resetForm();
  }
})(LoginForm);
export default FormikLoginForm;

// Original code, before using Formik and Yap:

/*
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
*/