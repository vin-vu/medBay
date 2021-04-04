import React, { useState } from 'react';
// regular js syntax > ES6 arrow syntax in terms of efficiency


//export default function BigSearch (props) {


//}
export default function BigSearch (props){
  const [itemList, setItemList] = useState({listingsFromDB: []}); //[{}, {}]
  const [searchInput, setSearchInput] = useState('');
  
  function search (itemlist){
    return itemList.filter(elem => elem )

    //array => itemlist [ apple ]
  }


  categories = PPE, nursing supplies, medical supplies

  function handleClick() {
    // fetch request (send keyword) for the items that contains keyword (handled by banckend)
    // receive response (expected upto 20 listings?)
    // error handling

    fetch( '/api/allprducts , {
      mehtod : "GET"
    })
    .then((res) => res.json())
    .then((res) => {
      const result = setItemList(res)
      search(result)
    })
  }
  
  const display = itemlist.map((element) => {
    <div> 
      {element}
    </div>
  })
  
  return (
    
    <div id='searchBar'>
      <input type='text' placeholder="search.." onChange={(e) => setSearchInput(e.target.value )} />
      <button onClick={handleClick()}>submit </button> 
      {display}
    </div>
  );
}

// export default BigSearch;