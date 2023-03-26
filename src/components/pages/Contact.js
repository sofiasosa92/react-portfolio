import React from 'react';

export default function Contact() {
  return (
    <div class="container">
      <div class="card mx-auto mt-5">
        <div class="card-body">
          <h5 class="card-title">Contact Me</h5>
          <form>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="nameInput" placeholder="Your name"/>
              <label for="nameInput">Name</label>
            </div>
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="emailInput" placeholder="name@example.com"/>
              <label for="emailInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <textarea class="form-control" id="messageInput" placeholder="Leave a message here" style={{height: "100px"}}></textarea>
              <label for="messageInput">Message</label>
            </div>
            <button type="submit" class="btn btn-no-outline btn-md btn-hover-color" style={{ borderRadius: '90px', backgroundColor: '#3e3e3e', color: 'white', padding: '5px 20px' }}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
