import React from 'react';

const Register = () => {
  const message=()=>{
    alert('Register Success')
  }
 return(
  <div className="container">
    <h2>Register</h2>
    <form onSubmit={message}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
  )
};

export default Register;
