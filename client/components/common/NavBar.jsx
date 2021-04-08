import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Button,
  Popover,
  Box,
  TextField,
  Divider
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PhoneIcon from '@material-ui/icons/Phone';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import {
  Link,
} from "react-router-dom";

import useStyles from './NavBarStyles';


const NavBar = (props) => {
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
    return fetchCart();
  };

  const handleCartPopoverClose = () => {
    setCartPopoverAnchorEl(null)
  };

  const isCartPopoverOpen = Boolean(cartPopoverAnchorEl);
  const cartPopoverId = open ? 'cart-popover' : undefined;
  // ------------------------------------------------------------------

  // STATE MANAGEMENT FOR CART ----------------------------------------
  const fetchCart = () => {
    fetch('/api/getCartUser')
      .then((res) => res.json())
      .then((data) => {
        console.log('Successfully retrieved user cart ', data);
        // Do stuff with cart data
      })
      .catch((err) => console.log('Unsuccessful cart retrieval: ', err))
  }
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

  // STATE MANAGEMENT FOR LOGIN / SIGNIN ------------------------------
  const [ usernameInput, setUsernameInput ] = useState('');
  const [ passwordInput, setPasswordInput ] = useState('');

  // Update Username / Password states on every keystroke
  const handleUsernameChange = (event) => {
    setUsernameInput(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  }

  // Insert loginData as post request
  const loginData = {
    method: 'POST',
    body: JSON.stringify({ username: usernameInput, password: passwordInput }),
    headers: { 'Content-Type': 'application/json' },
  }

  // Fetch from server
  const fetchLogin = (buttonType) => {
    const loginUrl = '/api/' + buttonType;
    // fetch('/api/login', loginData)
    fetch(loginUrl, loginData)
      .then((res) => res.json())
      .then((data) => {
        console.log('Logged In / Sign Up Successful: ', data);
        // Do stuff with user logged in data
      })
      .catch((err) => console.log('Unsuccessful login error: ', err));
  }

  // Handle Login Button Click
  const handleLoginButtonClick = (event) => {
    return fetchLogin('login');
  }

  // Handle Sign Up Button 
  const handleSignupButtonClick = (event) => {
    return fetchLogin('signup');
  }

  // ------------------------------------------------------------------

  

  // STATE MANAGEMENT FOR CATAGORIES BUTTONS --------------------------
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/categoryList')
      .then((res) => res.json())
      .then((arrOfCategories) => setCategories(arrOfCategories))
      .catch((err) => console.log('There has been a problem with fetching categories ', err));
  }, []);

  // fetch data based on category by attaching specific category as a query parameter to the end of URL
  function getItemByButton(cat) {
    console.log(cat);
    fetch(`api/categoryProducts?Category=${cat}`)
      .then((res) => res.json())
      .then((items) => {
        console.log(items);
        return props.setState(items);
      })
      .catch((err) => console.log('There has been a problem with fetching categories: ', err));
  }
  // ------------------------------------------------------------------


  // STATE MANAGEMENT FOR SEARCH BAR ----------------------------------
  const [searchInput, setSearchInput] = useState('');

  /*
  Insert fetchData as a second parameter to the fetchItem function
  use POST request to send keyword in the req.body to the server
  */
  const fetchData = {
    method: 'POST',
    body: JSON.stringify({ productName: searchInput }),
    headers: { 'Content-Type': 'application/json' },
  };

  /* Fetch from server */
  function fetchItem() {
    fetch('/api/productSearch', fetchData)
      .then((res) => res.json())
      .then((data) => {
        console.log("product search successed: ", data);
        return props.setState(data);
      })
      .catch((err) => console.log('There has been a problem with fetching items ', err));
  }

  /* Update state on every keystroke */
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  }

  /* Fetch on pressing enter key */
  const getItemByEnterKey = (event) => {
    if (event.key === 'Enter') return fetchItem();
  }

  // Fetch on button click
  const getItemByButtonClick = (event) => {
    return fetchItem();
  }

  // ------------------------------------------------------------------

  



  


  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {/* -- LogoButton & Logo Text -------------------------------- */}
          <Link to="/" style={{textDecoration: 'none'}}>
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
            <Typography className={classes.title} variant="h5" noWrap>
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
                {/* CATAGORIES BUTTONS ---------------------------------------------- */}
                <Link to="/products" style={{textDecoration: 'none'}}>
                  {
                    categories
                      .map((category, index) => (
                        <Button 
                          color="secondary" 
                          variant="contained" 
                          id={category} 
                          key={index} 
                          onClick={() => getItemByButton(category)}
                        >
                          {category}
                        </Button>
                      ))
                  }
                </Link>
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
              onChange={(e) => handleChange(e)}
              onKeyDown={(e) => getItemByEnterKey(e)}
            />
            <Link to="/products" style={{ textDecoration: 'none' }}>
              <Button 
                variant="contained" 
                color="secondary" 
                className={classes.searchButton}
                onClick={(e) => getItemByButtonClick(e)}
              >
                <SearchIcon />
              </Button>
            </Link>
          </div>
          {/* ---------------------------------------------------------- */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/products" style={{ textDecoration: 'none' }}>
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
                  id="filled-username-input"
                  label="Username"
                  type="username"
                  autoComplete="current-username"
                  variant="filled"
                  onChange={(e) => handleUsernameChange(e)}
                />
                <TextField
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                  onChange={(e) => handlePasswordChange(e)}
                />
                <Divider />
                <Button 
                  variant="contained" 
                  color="secondary" 
                  onClick={(e) => handleLoginButtonClick(e)}
                >
                  Login
                </Button>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={(e) => handleSignupButtonClick(e)}
                >
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
