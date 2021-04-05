import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import IndividualDisplay from './individualDisplay.jsx';

// '/api/allProducts'
const ItemOuterContainer = (props) => {
  const [listingsState, setListingsState] = useState({
    listingsFromDb: [],
    listingsToRender: [],
    currentListings: 0,
    addToCart: () => console.log('I\'ve been added to cart!!!'),
  });

  // React function to assemble a bunch of listing elements and can work in any component
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
  };

  // Will be expecting an image, title, description, price, category, and quantity
  useEffect(() => {
    fetch('/api/allProducts')
      .then((response) => response.json())
      .then((dbListings) => {
        console.log(dbListings);
        const listingData = createListingElements(dbListings, listingsState.addToCart);
        setListingsState({
          ...listingsState, listingsToRender: listingData.listings, currentListings: listingData.listingsCreated, listingsFromDb: dbListings,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid
      container
      display="flex"
      flexWrap="wrap"
      direction="row"
      justify="flex-start"
      alignItems="flex-end"
      id="itemOuterCountainer"
    >
      {listingsState.listingsToRender}
    </Grid>
  );
};

export default ItemOuterContainer;
