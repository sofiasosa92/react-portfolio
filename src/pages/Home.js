import React from 'react';
import profilePic from '../assets/photos/sosa.jpg';  
export default function Home() {
  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', position: 'relative' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pr-0 mr-0 pl-lg-0 pr-lg-5 mr-lg-0 mt-3 mt-lg-0 align-items-center justify-content-center align-items-lg-left justify-content-lg-left text-center text-lg-left d-flex order-1 order-lg-0 ">
            <div className="infohero">
              <p className="infohero__p" style={{ fontSize: '35px' }}>Hello, I'm</p>
              <h1 className="infohero__title" style={{ fontSize: '50px' }}>Sofia Sosa</h1>
            </div>
          </div>

          <div className="col-lg-6 text-center order-0 order-lg-1 mb-5 mb-lg-0">
            <img
              className="rounded-circle img-fluid"
              src={ profilePic }
              style={{ width: '400px', height: '400px', float: 'right', border: '3px solid black', objectFit: 'cover' }}
              alt="sosa.jpg"
            />
          </div>
        </div>
      </div>

      <footer className="footer bg-secondary text-white text-center py-3" style={{ position: 'fixed', bottom: 0, width: '100%' }}>
  <div className="container">
    <div className="mt-2">
      <a href="https://github.com/sofiasosa92" target="_blank" rel="noopener noreferrer" className="text-white mx-2"><i className="fab fa-github">GitHub</i></a>
      <a href="https://www.linkedin.com/in/sof%C3%ADa-sosa-b43044245/" target="_blank" rel="noopener noreferrer" className="text-white mx-2"><i className="fab fa-linkedin">LinkedIn</i></a>
      <a href="https://www.instagram.com/sofiasosa" target="_blank" rel="noopener noreferrer" className="text-white mx-2"><i className="fab fa-instagram">Instagram</i></a>
    </div>
  </div>
</footer>

    </div>
  );
}
