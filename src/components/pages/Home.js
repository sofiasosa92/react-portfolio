import React from 'react';

export default function Home() {
  return (
    <div style={{ backgroundColor: 'white' }}>
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
  src="./photos/sosa.jpg"
  style={{ width: '400px', height: '400px', float: 'right', border: '3px solid black', objectFit: 'cover' }}
  alt="sosa.jpg"
/>
          </div>
        </div>
      </div>
    </div>
  );
}
