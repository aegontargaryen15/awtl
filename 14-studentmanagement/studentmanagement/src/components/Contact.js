import React from 'react';

const Contact = () => {
  const message=()=>{
    alert('Register Success')
  }
  return(
  <div className="container">
    <h2>Contact Us</h2>
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
        <div><label htmlFor="message">Message</label></div>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
)};

export default Contact;
