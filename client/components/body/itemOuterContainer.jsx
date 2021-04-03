import React, { useState } from 'react';

const ItemOuterContainer = (props) => {
  const [listingsState, setListingsState] = useState({
    listingsFromDB: [],

  });
  return (
    <div id="itemOuterCountainer">
      {listingsState.listingsFromDB}
    </div>
  )
}

export default ItemOuterContainer;