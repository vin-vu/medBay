import React, { useState } from 'react';
import LogoName from './navbar/logoName.jsx';
// import BigSearch from './navbar/bigSearch';
// import Categories from './navbar/categories';
// import Login from './navbar/login';
// import Signup from './navbar/signup';

<<<<<<< HEAD
const Navbar = (props) => {
  
  return (
    <Categories></Categories>
  )
}
=======
const Navbar = (props) => (
  <header id="navbar">
    <div id="top">
      <LogoName />
      <section id="bigSearchPlaceholder">Search bar </section>
      <section id="loginPlaceholder">Login Button</section>
      <section id="signupPlaceholder">signUp Button</section>
    </div>
    <div id="bottom">
      <section id="categoryPlaceholder">categories</section>
    </div>

  </header>
);
>>>>>>> main

export default Navbar;
