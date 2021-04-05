import React, { useState } from 'react';
import Navbar from './components/navbar';
import MainBody from './components/mainBody';

const App = () => {
  const [itemList, setItemList] = useState();
  // console.log(itemList);
  return (
    <div id="bigBoyBody">
      <Navbar setState={(newState) => setItemList(newState)} />
      <MainBody items={itemList} />
    </div>
  );
};

export default App;
