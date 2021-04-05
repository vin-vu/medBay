// Dependancy imports
import React, { useState } from 'react';
// Local files imports
import LogoName from './navbar/logoName';
import BigSearch from './navbar/bigSearch';
import { ButtonGroup, makeStyles } from '@material-ui/core/';
import Categories from './navbar/categories';


import Login from './navbar/login';
import Signup from './navbar/signup';

const Navbar = (props) => (
  <header id="navbar">
    <div id="top">
      <LogoName />
      <BigSearch setState={props.setState} />
      <ButtonGroup variant="contained">
        <Login />
        <Signup />
      </ButtonGroup>
    </div>
    <div id="bottom">
      <Categories />
    </div>
  </header>
);

export default Navbar;
