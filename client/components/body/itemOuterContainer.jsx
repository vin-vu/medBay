import React, { useState, useEffect } from 'react';
import IndividualDisplay from './individualDisplay.jsx';

// '/api/allProducts'
const ItemOuterContainer = (props) => {
  const [listingsState, setListingsState] = useState({
    listingsFromDB: [],

  });

  useEffect(() => {
    // fetch('api/allProducts')
    //   .then((dbListings) => {
    //     setListingsState({ ...listingsState, listingsFromDB: dbListings });
    //   });
  }, []);

  // In the end I'll be feeding in an array of preconstructed IndividualDisplay
  // components feeding in the props from state
  console.log(props);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div id="itemOuterCountainer">
      {(props.items === undefined) ? (<div>please wait...</div>) : (
        (props.items).map((item) => (
          <IndividualDisplay product={item} key={item._id}/>
        ))
      )}

    </div>
  );
};

export default ItemOuterContainer;
