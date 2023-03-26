import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul style={{ backgroundColor: '#BF9270' }} className="navbar navbar-expand-lg navbar-dark">
      <li class="container">
        <a class="navbar-brand" href="/">
          <h1>Sofia Sosa </h1>
          <header><h4>Full Stack Web Developer</h4></header>
        </a>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? "btn btn-no-outline btn-md btn-hover-color" : 'nav-link'}
          style={{ borderRadius: '90px', backgroundColor: currentPage === 'Home' ? '#3e3e3e' : 'transparent', color: 'white', padding: '10px 20px' }}
        >
          Home
        </a>

      </li>
      <li type="button" class="btn btn-no-outline btn-hover-color  btn-md">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? "btn btn-no-outline btn-md btn-hover-color" : 'nav-link'}
          style={{ borderRadius: '90px', backgroundColor: currentPage === 'About' ? '#3e3e3e' : 'transparent', color: 'white', padding: '10px 20px' }}
        >
          About
        </a>
      </li>
      <li type="button" class="btn btn-no-outline btn-hover-color  btn-md">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          className={currentPage === 'Blog' ? "btn btn-no-outline btn-md btn-hover-color" : 'nav-link'}
          style={{ borderRadius: '90px', backgroundColor: currentPage === 'Blog' ? '#3e3e3e' : 'transparent', color: 'white', padding: '10px 20px' }}
        >
          Blog
        </a>
      </li>
      <li type="button" class="btn btn-no-outline btn-hover-color  btn-md">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? "btn btn-no-outline btn-md btn-hover-color" : 'nav-link'}
          style={{ borderRadius: '90px', backgroundColor: currentPage === 'Contact' ? '#3e3e3e' : 'transparent', color: 'white', padding: '10px 20px' }}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
