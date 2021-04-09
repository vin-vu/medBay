import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Avatar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Button,
  Popover,
  Box,
  TextField,
  Divider,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PhoneIcon from '@material-ui/icons/Phone';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Link,
} from "react-router-dom";

import useStyles from './NavBarStyles';


const NavBar = (props) => {
  // USESTYLES HOOK ---------------------------------------------------
  const classes = useStyles();
  // ------------------------------------------------------------------


  // CATAGORIES POPOVER HANDLING --------------------------------------
  const [ catagoriesPopoverAnchorEl, setCatagoriesPopoverAnchorEl ] = useState(null);

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
  const [ cartPopoverAnchorEl, setCartPopoverAnchorEl ] = useState(null);

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
  const [ usersCart, setUsersCart ] = useState([]);

  const fetchCart = () => {
    fetch('/api/getCartUser')
      .then((res) => res.json())
      .then((data) => {
        // console.log('Successfully retrieved user cart ', data);
        // Do stuff with cart data
        setUsersCart(data.cart[0].products);
        console.log('The users cart is: ', usersCart);
      })
      .catch((err) => console.log('Unsuccessful cart retrieval: ', err))
  }

  const handleDeleteItemClick = (event, itemId) => {
    fetch('/api/deleteUserProduct', {
      method: 'POST',
      body: JSON.stringify({ id: itemId }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('The cart data.cart after deleting is: ', data.cart);
        // setUsersCart(data);
      })
      .catch((err) => console.log('Unsuccessful delete error: ', err));
  };

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
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ LoggedInUser, setLoggedInUser ] = useState('');

  // Upon initial component mount, check if user isLoggedIn
  useEffect(() => {
    fetch('/api/isLoggedIn')
      .then((res) => res.json())
      .then((data) => {
        console.log('The logged in username is: ', data.username)
        if (data.username === null) setIsLoggedIn(false);
        else setIsLoggedIn(true);
        setLoggedInUser(data.username);
      })
      .catch((err) => console.log('Issue with isLoggedIn ', err));
  }, []);

  // Conditional Greeting Depending if User is Logged In
  const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return (
        <Button variant="outlined" style={{color: 'black', border: 'solid 2px black', marginRight: 20}} disabled>
          {LoggedInUser}
        </Button>
      );
    }
    return (<div></div>);
  }

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const ProfilePopover = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return (
        <Box
          className={classes.popover} 
          display="flex" 
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Avatar />
          <Typography 
            variant="h5"
            style={{marginTop: 18}}
          >
            Welcome, {LoggedInUser}
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            style={{marginTop: 18}}
            onClick={(e) => handleSignoutButtonClick(e)}
          >
            Sign Out
          </Button>
        </Box>
      );
    }
    return (
      <Box 
        className={classes.popover} 
        display="flex" 
        flexDirection="column"
      >
        <Typography variant="h6" gutterBottom>Sign In</Typography>
        <TextField
          id="filled-username-input1"
          label="Username"
          type="username"
          autoComplete="current-username"
          variant="filled"
          inputRef={usernameRef}
        />
        <TextField
          id="filled-password-input1"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          inputRef={passwordRef}
        />
        <Divider />
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={(e) => {
            handleLoginButtonClick(e, usernameRef.current.value, passwordRef.current.value);
          }}
        >
          Login
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={(e) => {
            handleSignupButtonClick(e, usernameRef.current.value, passwordRef.current.value)
          }}
        >
          Signup
        </Button>
      </Box>
    );
  }

  // Fetch Signout 
  const fetchSignout = () => {
    fetch('/api/signout')
      .then((res) => res.json())
      .then((data) => {
        setIsLoggedIn(false);
        setLoggedInUser('');
      })
      .catch((err) => console.log('Issue with signout endpoint ', err));
  }

  // Handling Signout Button Click
  const handleSignoutButtonClick = (event) => {
    setIsLoggedIn(false);
    setLoggedInUser('');
    return fetchSignout();
  }

  // Fetch from server
  const fetchLogin = (buttonType, userInput, pwInput) => {
    const loginUrl = '/api/' + buttonType;
    fetch(loginUrl, {
      method: 'POST',
      body: JSON.stringify({ username: userInput, password: pwInput }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Logged In / Sign Up Successful: ', data);
        // Do stuff with user logged in data
        // setIsLoggedIn(true);
        // setLoggedInUser(data.user.username);
      })
      .catch((err) => console.log('Unsuccessful login error: ', err));
  }

  // Handle Login Button Click
  const handleLoginButtonClick = (event, username, password) => {
    setIsLoggedIn(true);
    setLoggedInUser(username);
    return fetchLogin('login', username, password);
  }

  // Handle Sign Up Button 
  const handleSignupButtonClick = (event, username, password) => {
    setIsLoggedIn(true);
    setLoggedInUser(username);
    return fetchLogin('signup', username, password);
  }

  // ------------------------------------------------------------------

  

  // STATE MANAGEMENT FOR CATAGORIES BUTTONS --------------------------
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCart();
    fetch('/api/categoryList')
      .then((res) => res.json())
      .then((arrOfCategories) => setCategories(arrOfCategories))
      .catch((err) => console.log('There has been a problem with fetching categories ', err));
  }, []);

  // fetch data based on category by attaching specific category as a query parameter to the end of URL
  const getItemByButton = (cat) => {
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
        console.log("product search successful: ", data);
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
            <Greeting isLoggedIn={isLoggedIn} />
            <a href="https://bit.ly/31UNEiV" style={{ textDecoration: 'none' }}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <PhoneIcon />
              </IconButton>
            </a>
            {/* -- Shopping Cart Button -------------------------------- */}
            <IconButton 
              aria-label="show 17 new notifications" 
              aria-controls={cartPopoverId}
              aria-haspopup="true"
              onClick={handleCartPopoverClick}
              color="inherit"
              >
              <Badge badgeContent={usersCart.length} color="secondary">
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
                <div className={classes.cartDiv}>
                  {
                    usersCart
                      .map((item, index) => (
                        <Box 
                          display="flex" 
                          justifyContent="space-between" 
                          alignItems="center"
                          className={classes.cartContent}
                        >
                          <Box display="flex" justifyContent="flex-start" alignItems="center">
                            <Avatar src={item.ImageURL} />
                            <Box style={{paddingLeft: 16}}>
                              <Typography variant="subtitle1" noWrap="true">
                                {item.Title}
                              </Typography>
                              <Typography variant="subtitle2">
                                ${item.price}
                              </Typography>
                              <Typography variant="subtitle2">
                                Quantity: {item.quantity}
                              </Typography>
                            </Box>
                          </Box>
                          <Box>
                            <IconButton
                              onClick={(e) => {
                                handleDeleteItemClick(e, item.productId);
                                fetchCart();
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Box>
                        </Box>
                      ))
                  }
                </div>
                <Divider />
                <Button 
                  variant="contained" 
                  color="secondary" 
                  onClick={(e) => console.log('Checkout Clicked!')}
                  style={{marginTop: 24}}
                >
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
              <ProfilePopover isLoggedIn={isLoggedIn} />
            </Popover>
            {/* ---------------------------------------------------------- */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
