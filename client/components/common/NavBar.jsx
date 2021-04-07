import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PhoneIcon from '@material-ui/icons/Phone';
import Popover from '@material-ui/core/Popover';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import {
  Link
} from "react-router-dom";

import useStyles from './NavBarStyles';


const NavBar = () => {
  // USESTYLES HOOK ---------------------------------------------------
  const classes = useStyles();
  // ------------------------------------------------------------------


  // CATAGORIES POPOVER HANDLING --------------------------------------
  const [catagoriesPopoverAnchorEl, setCatagoriesPopoverAnchorEl] = useState(null);

  const handleCatagoriesPopoverClick = (event) => {
    setCatagoriesPopoverAnchorEl(event.currentTarget);
  };

  const handleCatagoriesPopoverClose = () => {
    setCatagoriesPopoverAnchorEl(null)
  };

  const isCatagoriesPopoverOpen = Boolean(catagoriesPopoverAnchorEl);
  const catagoriesPopoverId = open ? 'catagories-popover' : undefined;
  // ------------------------------------------------------------------

  // SHOPPING CART POPOVER HANDLING -----------------------------------
  const [cartPopoverAnchorEl, setCartPopoverAnchorEl] = useState(null);

  const handleCartPopoverClick = (event) => {
    setCartPopoverAnchorEl(event.currentTarget);
  };

  const handleCartPopoverClose = () => {
    setCartPopoverAnchorEl(null)
  };

  const isCartPopoverOpen = Boolean(cartPopoverAnchorEl);
  const cartPopoverId = open ? 'cart-popover' : undefined;
  // ------------------------------------------------------------------

  // PROFILE (LOGIN/SIGNOUT) POPOVER HANDLING -------------------------
  const [profilePopoverAnchorEl, setProfilePopoverAnchorEl] = useState(null);

  const handleProfilePopoverClick = (event) => {
    setProfilePopoverAnchorEl(event.currentTarget);
  };

  const handleProfilePopoverClose = () => {
    setProfilePopoverAnchorEl(null)
  };

  const isProfilePopoverOpen = Boolean(profilePopoverAnchorEl);
  const profilePopoverId = open ? 'profile-popover' : undefined;
  // ------------------------------------------------------------------


  
  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {/* -- LogoButton & Logo Text -------------------------------- */}
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <Avatar className={classes.avatarLogo}>
                <LocalHospitalIcon />
              </Avatar>
            </IconButton>
          </Link>
            <Typography className={classes.title} variant="h6" noWrap>
              medBay
            </Typography>
          {/* ---------------------------------------------------------- */}
          {/* -- Catagories Button ------------------------------------- */}
          <Button 
            variant="contained" 
            color="secondary" 
            style={{marginLeft: 50}}
            aria-controls={catagoriesPopoverId}
            onClick={handleCatagoriesPopoverClick}
          >
            Catagories
            <ViewModuleIcon style={{marginLeft: 10}}/>
          </Button>
          <Popover
              id={catagoriesPopoverId}
              open={isCatagoriesPopoverOpen}
              anchorEl={catagoriesPopoverAnchorEl}
              onClose={handleCatagoriesPopoverClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box 
                className={classes.popover} 
                display="flex" 
                flexDirection="column"
              >
                <Typography variant="h6" gutterBottom>Catagories</Typography>
                <Divider />
                <Button variant="contained" color="secondary" onClick={(e) => console.log('FAK Clicked!')}>
                  FAK
                </Button>
                <Button variant="contained" color="secondary" onClick={(e) => console.log('MS Clicked!')}>
                  MS
                </Button>
                <Button variant="contained" color="secondary" onClick={(e) => console.log('PPE Clicked!')}>
                  PPE
                </Button>
              </Box>
            </Popover>
          {/* ---------------------------------------------------------- */}
          {/* -- Search Bar -------------------------------------------- */}
          <div className={classes.search}>
            {/* <div className={classes.searchIcon}>
              <SearchIcon />
            </div> */}
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <Button variant="contained" color="secondary" className={classes.searchButton}>
              <SearchIcon />
            </Button>
          </div>
          {/* ---------------------------------------------------------- */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/products">
              <IconButton aria-label="show 4 new mails" color="inherit">
                <PhoneIcon />
              </IconButton>
            </Link>
            {/* -- Shopping Cart Button -------------------------------- */}
            <IconButton 
              aria-label="show 17 new notifications" 
              aria-controls={cartPopoverId}
              aria-haspopup="true"
              onClick={handleCartPopoverClick}
              color="inherit"
              >
              <Badge badgeContent={3} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Popover
              id={cartPopoverId}
              open={isCartPopoverOpen}
              anchorEl={cartPopoverAnchorEl}
              onClose={handleCartPopoverClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box 
                className={classes.popover} 
                display="flex" 
                flexDirection="column"
              >
                <Typography variant="h6" gutterBottom>Shopping Cart</Typography>
                <Divider />
                <Button variant="contained" color="secondary" onClick={(e) => console.log('Checkout Clicked!')}>
                  Checkout
                </Button>
              </Box>
            </Popover>
            {/* ---------------------------------------------------------- */}
            {/* -- Profile (Login/Signout) Button -------------------------------- */}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={profilePopoverId}
              aria-haspopup="true"
              onClick={handleProfilePopoverClick}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Popover
              id={profilePopoverId}
              open={isProfilePopoverOpen}
              anchorEl={profilePopoverAnchorEl}
              onClose={handleProfilePopoverClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box 
                className={classes.popover} 
                display="flex" 
                flexDirection="column"
              >
                <Typography variant="h6" gutterBottom>Sign In</Typography>
                <TextField
                  id="filled-email-input"
                  label="Email"
                  type="email"
                  autoComplete="current-email"
                  variant="filled"
                />
                <TextField
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                />
                <Divider />
                <Button variant="contained" color="secondary" onClick={(e) => console.log('Login Button Clicked!')}>
                  Login
                </Button>
                <Button variant="contained" color="primary" onClick={(e) => console.log('Login Button Clicked!')}>
                  Signup
                </Button>
              </Box>
            </Popover>
            {/* ---------------------------------------------------------- */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
