import React, { useState } from 'react';
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
  // console.log("itemlist", itemList);
  // console.log(itemList);
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

    useEffect(
      (dbListings = props.items) => {
        console.log(dbListings);
        const listingData = createListingElements(dbListings, listingsState.addToCart);
        console.log(listingData);
        setListingsState({
          ...listingsState, listingsToRender: listingData.listings, currentListings: listingData.listingsCreated, listingsFromDb: dbListings,
        });
      }, []);
  };
  return (
    <div id="bigBoyBody">
      <Navbar setState={(newState) => setItemList({ ...itemList, listingsFromDb: newState } />
        <MainBody items={itemList} />
    </div>
  );
};

export default App;
