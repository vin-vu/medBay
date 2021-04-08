import React, { useState, useEffect } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from './components/common/NavBar';
import HomePage from './components/HomePage';

import MainBody from './components/mainBody';
import IndividualDisplay from './components/body/individualDisplay';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#42a5f5',
    },
  },
});

const App = () => {
  const [itemList, setItemList] = useState({
    listingsFromDb: [],
    listingsToRender: [],
    currentListings: 0,
    addToCart: () => {
      fetch('/api/allProducts/')
        .then((response) => response.json())
        .then((response) => {
          console.log(response[0])
      })
        .catch((err) => console.log(err));
    }
  });

  // Modular loop function, takes two arguments, an array of objects and a callback
  const createListingElements = (listingArray, cartCallback) => {
    // create a variable cache for renderListings
    const renderListings = [];
    // create a mutable variable to assign numbers for the key prop of these elements
    // this could be refactored to take in the number of elements in the parent component
    let currentNumber = 0;
    // create a for of loop to run through each element of the provided array
    // push the evaluated result of the IndividualDisplay component constructor,
    // passing in the respective props for prop drilling
    // increment the currentNumber by 1
    for (const element of listingArray) {
      renderListings.push(<IndividualDisplay
        objectID={element._id}
        title={element.Title}
        description={element.Description}
        category={element.Category}
        image={element.ImageURL}
        price={element.Price}
        quantity={element.Quantity}
        buttonFunc={cartCallback}
        key={`${currentNumber + 1}`}
      />);
      currentNumber += 1;
    }
    // create a return object with two key/value pairs
    // listings set to the completed renderListings array
    // listingsCreated set to the number of listings that were created
    const results = { listings: renderListings, listingsCreated: currentNumber };
    return results;
  };

  // initial products list
  // useEffect will only run once if you set it's second argument to an empty array
  // this makes useEffect close to ComponentDidMount but it is not the same
  // useEffect in this fashion runs once AFTER the initial render
  useEffect(() => {
    fetch('/api/allProducts')
      .then((response) => response.json())
      .then((dbListings) => {
        console.log('List is coming from initial render: ', dbListings);
        const listingData = createListingElements(dbListings, itemList.addToCart);
        setItemList({
          ...itemList, listingsToRender: listingData.listings, currentListings: listingData.listingsCreated, listingsFromDb: dbListings,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // state change, useEffect will run a state change for
  // any specific state changes that are detected in it's second argument which is an array
  // with arguments in the array, useEffect is listening for changes to those state references
  useEffect(
    (dbListings = itemList.listingsFromDb) => {
      console.log(dbListings);
      const listingData = createListingElements(dbListings, itemList.addToCart);
      console.log(listingData);
      setItemList({
        ...itemList, listingsToRender: listingData.listings, currentListings: listingData.listingsCreated, listingsFromDb: dbListings,
      });
    }, [itemList.listingsFromDb],
  );
  // Main render for the application with associated prop drilling
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar setState={(newState) => setItemList({ ...itemList, listingsFromDb: newState })} />
        {/* <Navbar setState={(newState) => setItemList({ ...itemList, listingsFromDb: newState })} /> */}
        <div style={{ height: '100px' }} />
        <Switch>
          <Route path="/products">
            <MainBody items={itemList.listingsToRender} />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
    
  );
};

export default App;
