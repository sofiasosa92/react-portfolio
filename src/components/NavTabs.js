import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (

<ul style={{backgroundColor: '#BF9270'}} className="navbar navbar-expand-lg navbar-dark">
    <li class="container">
   <a class="navbar-brand" href="/">
    <h1>Sofia Sosa </h1>
    <header><h4>Full Stack Web Developer</h4></header>
  </a>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
