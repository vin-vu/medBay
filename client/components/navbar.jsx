import React, { useState } from 'react';
import * as BigSearch from './navbar/bigSearch';
import * as Categories from './navbar/categories';
import * as Login from './navbar/login';
import * as LogoName from './navbar/logoName';
import * as Signup from './navbar/signup';

const Navbar = (props) => (
  <header id="navbar">
    <div id="top">
      <section id="logoNamePlaceholder">Picture of sickbay</section>
      <section id="bigSearchPlaceholder">Search bar </section>
      <section id="loginPlaceholder">Login Button</section>
      <section id="signupPlaceholder">signUp Button</section>
    </div>
    <div id="bottom">
      <section id="categoryPlaceholder">categories</section>
    </div>

  </header>
);

export default Navbar;
