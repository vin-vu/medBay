import React, { useState, useEffect } from 'react';
import * as IndividualDisplay from './body/IndividualDisplay';

// '/api/allProducts'
const ItemOuterContainer = (props) => {
  const [listingsState, setListingsState] = useState({
    listingsFromDB: [],

  });

  useEffect(() => {
    fetch('http://localhost:3000/api/allProducts')
    .then(dbListings => setListingsState({...listingsState, listingsFromDB = dbListings}))
  });

  return (
    <div id="itemOuterCountainer">
      {listingsState.listingsFromDB}
    </div>
  );
};

export default ItemOuterContainer;