// Dependancy imports
import React, { useState } from 'react';
import {
  ButtonGroup, AppBar, Toolbar, makeStyles,
} from '@material-ui/core/';
// Local files imports
import LogoName from './navbar/logoName';
import BigSearch from './navbar/bigSearch';
// import Categories from './navbar/categories';

import Login from './navbar/login.jsx';
import Signup from './navbar/signup.jsx';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <LogoName />
        <div className={classes.grow} />
        <BigSearch />
        <div className={classes.grow} />
        <ButtonGroup variant="contained">
          <Signup />
          <Login />
        </ButtonGroup>
      </Toolbar>
      {/* <Toolbar>
        <section id="categoryPlaceholder">categories</section>
      </Toolbar> */}
    </AppBar>
  );
};

export default Navbar;
