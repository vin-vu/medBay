import React, { useState } from 'react';
import { Typography, InputBase } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    marginLeft: theme.spacing(3),
    width: '75%',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },

}));

export default function BigSearch() {
  const [itemList, setItemList] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  // console.log(searchInput)
  const classes = useStyles();

  /*
  Insert fetchData as a second parameter to the fetchItem function
  use POST request to send keyword in the req.body to the server
  */

  // const fetchData = {
  //   method: 'POST',
  //   body: JSON.stringify(keyword),
  //   headers: { 'Content-Type': 'application/json' },
  // };

  /* Fetch from server */
  // update function to handle post request with the keyword as a parameter
  function fetchItem() {
    fetch('http://localhost:3000/api/allProducts')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setItemList(data);
      })
      .catch((err) => console.log('There has been a problem with your fetch operation: ', err));
  }

  /* Update state on every keystroke */
  function handleChange(event) {
    setSearchInput(event.target.value);
  }
  /* Fetch on pressing enter key */
  function getItemByEnterKey(event) {
    if (event.key === 'Enter') return fetchItem(); // update by passing in the keyword as parameter
  }
  /* Fetch on clicking button */
  function getItemByButton() {
    return fetchItem(); // update by passing in the keyword as parameter
  }

  // need to to send the body component the fetched data
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        type="text"
        placeholder="Search.."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => getItemByEnterKey(e)}
      />
      {/* Pass in SearchInput as a parameter once fetchItem function is updated */}
      {/* <button onClick={() => getItemByButton()}>Search</button> */}
    </div>
  );
}
