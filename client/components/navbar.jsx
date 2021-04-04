// Dependancy imports
import React, { useState } from 'react';
// Local files imports
import LogoName from './navbar/logoName';
import BigSearch from './navbar/bigSearch';
import { ButtonGroup, makeStyles } from '@material-ui/core/';
// import Categories from './navbar/categories';


import Login from './navbar/login.jsx';
import Signup from './navbar/signup.jsx';

const Navbar = (props) => (
  <header id="navbar">
    <div id="top">
      <LogoName />
      <BigSearch />
      <ButtonGroup variant="contained">
        <Login />
        <Signup />
      </ButtonGroup>
    </div>
    <div id="bottom">
      <section id="categoryPlaceholder">categories</section>
    </div>

  </header>
);

export default Navbar;
