import React, { useState } from 'react';

export default function BigSearch() {
  const [itemList, setItemList] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  // console.log(searchInput)

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
    <div id="searchBar">
      <input
        type="text"
        placeholder="search.."
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => getItemByEnterKey(e)}
      />
      {/* Pass in SearchInput as a parameter once fetchItem function is updated */}
      <button onClick={() => getItemByButton()}>Search</button>
    </div>
  );
}