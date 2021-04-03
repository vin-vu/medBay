import React, { useState } from 'react';
import LogoName from './navbar/logoName.jsx';
import BigSearch from './navbar/bigSearch.jsx';
// import Categories from './navbar/categories';
// import Login from './navbar/login';
// import Signup from './navbar/signup';

const Navbar = (props) => (
  <header id="navbar">
    <div id="top">
      <LogoName />
      <BigSearch />
      <section id="loginPlaceholder">Login Button</section>
      <section id="signupPlaceholder">signUp Button</section>
    </div>
    <div id="bottom">
      <section id="categoryPlaceholder">categories</section>
    </div>

  </header>
);

export default Navbar;
