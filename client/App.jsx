import React, { useState, useEffect } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple, orange, lightBlue } from '@material-ui/core/colors';
import Navbar from './components/navbar';
import MainBody from './components/mainBody';
import IndividualDisplay from './components/body/individualDisplay';

const App = () => {
  const [itemList, setItemList] = useState({
    listingsFromDb: [],
    listingsToRender: [],
    currentListings: 0,
    addToCart: () => console.log('I\'ve been added to cart!!!'),
  })

  const createListingElements = (listingArray, cartCallback) => {
    const renderListings = [];
    let currentNumber = 0;
    for (const element of listingArray) {
      renderListings.push(<IndividualDisplay
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
    const results = { listings: renderListings, listingsCreated: currentNumber };
    return results;
  }


  // initial products list
  useEffect(() => {
    fetch('/api/allProducts')
      .then((response) => response.json())
      .then((dbListings) => {
        console.log("List is coming from initial render: ", dbListings);
        const listingData = createListingElements(dbListings, itemList.addToCart);
        setItemList({
          ...itemList, listingsToRender: listingData.listings, currentListings: listingData.listingsCreated, listingsFromDb: dbListings,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // state change 
  useEffect(
    (dbListings = itemList.listingsFromDb) => {
      console.log(dbListings);
      const listingData = createListingElements(dbListings, itemList.addToCart);
      console.log(listingData);
      setItemList({
        ...itemList, listingsToRender: listingData.listings, currentListings: listingData.listingsCreated, listingsFromDb: dbListings,
      });
    }, [itemList.listingsFromDb]);

  return (
    <ThemeProvider theme={theme}>
      <Navbar setState={(newState) => setItemList({ ...itemList, listingsFromDb: newState })} />
      <MainBody items={itemList.listingsToRender} />
    </ThemeProvider>
  );
};
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3F9D47',
    },
    secondary: {
      main: lightBlue[500],
    },
  },
});

export default App;
