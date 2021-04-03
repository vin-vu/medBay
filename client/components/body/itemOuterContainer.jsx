import React, { useState, useEffect } from 'react';
import IndividualDisplay from './individualDisplay.jsx';

// '/api/allProducts'
const ItemOuterContainer = (props) => {
  const [listingsState, setListingsState] = useState({
    listingsFromDB: [],

  });

  useEffect(() => {
    fetch('http://localhost:3000/api/allProducts')
      .then((dbListings) => {
        setListingsState({ ...listingsState, listingsFromDB: dbListings });
      });
  });

  // In the end I'll be feeding in an array of preconstructed IndividualDisplay
  // components feeding in the props from state
  return (
    <div id="itemOuterCountainer">
      <IndividualDisplay />
    </div>
  );
};

export default ItemOuterContainer;
