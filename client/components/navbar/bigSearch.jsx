import React, { useState } from 'react';

const BigSearch = (props) => {
  const [search, setSearch] = useState({listingsFromDB: [],});
  
  const useEffect = () => {
    // fetch request (send keyword) for the items that contains keyword (handled by banckend)
    // receive response (expected upto 20 listings?)
    // erorr handling
  }

  return (

    <div id='searchBar'>
      <input type='text' placeholder="search.." />
    </div>
  );
}

export default BigSearch;