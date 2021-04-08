// Dependancy imports
import React, { useState } from 'react';
import {
  ButtonGroup, AppBar, Toolbar, Box, Slide, useScrollTrigger, makeStyles,
} from '@material-ui/core/';
// Local files imports
import LogoName from './obsoleteNavBar/logoName';
import BigSearch from './obsoleteNavBar/bigSearch';
import Categories from './obsoleteNavBar/categories';
import Login from './obsoleteNavBar/login';
import Signup from './obsoleteNavBar/signup';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

// EXTRA FUNCTIONALITY TO HIDE WHILE SCROLLING
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// HideOnScroll.propTypes = {
//   children: PropTypes.element.isRequired,
// };

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <HideOnScroll>
      <AppBar >
        <Toolbar>
          <Box className={classes.logo}>
            <a href="https://bit.ly/31UNEiV" target="_blank" rel="noreferrer"><img src="../assets/sickBay.jpg" alt="Logo" width="70px" height="70px" /></a>
          </Box>
          <LogoName />
          <div className={classes.grow} />
          <BigSearch setState={props.setState} />
          <div className={classes.grow} />
          <ButtonGroup variant="contained">
            <Login />
            <Signup />
          </ButtonGroup>
        </Toolbar>
        <Toolbar>
          <Categories setState={props.setState} />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
