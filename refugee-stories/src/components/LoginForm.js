import React from 'react';

function LoginForm() {
  return (
    <div>
      <form>
          <label htmlFor="username">Username: </label>
          <input type='text' name='username' id='username' placeholder='username'/>
      </form>
    </div>
  );
}

export default LoginForm;