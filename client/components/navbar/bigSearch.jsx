import React, { useState } from 'react';

export default function BigSearch(props) {
  const [searchInput, setSearchInput] = useState('');
  /*
  Insert fetchData as a second parameter to the fetchItem function
  use POST request to send keyword in the req.body to the server
  */

  // const fetchData = {
  //   method: 'POST',
  //   body: JSON.stringify({ productName: searchInput }),
  //   headers: { 'Content-Type': 'application/json' },
  // };

  /* Fetch from server */
  // update function to handle post request with the keyword as a parameter
  function fetchItem() {
    fetch('/api/allProducts')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return props.setState(data);
      })
      .catch((err) => console.log('There has been a problem with fetching items ', err));
  }

  /* Update state on every keystroke */
  function handleChange(event) {
    setSearchInput(event.target.value);
  }
  /* Fetch on pressing enter key */
  function getItemByEnterKey(event) {
    if (event.key === 'Enter') return fetchItem();
  }
  /* Fetch on clicking button */
  function getItemByButton() {
    return fetchItem();
  }

  return (
    <div id="searchBar">
      <input
        type="text"
        placeholder="search.."
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => getItemByEnterKey(e)}
      />
      <button onClick={() => getItemByButton()}>Search</button>
    </div>
  );
}