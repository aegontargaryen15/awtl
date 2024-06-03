import React from 'react';


const Login = () => {
  const message=()=>{
    alert('Register Success')
  }
  return(
  <div className="container">
    <h2>Login</h2>
    <form onSubmit={message}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
)};

export default Login;
