import React, { useState } from 'react';
import ItemOuterContainer from './body/itemOuterContainer.jsx';
// import LoadMoreBtn from './body/loadMoreBtn.jsx';
// import IndividualDisplay from './body/individualDisplay.jsx';

const MainBody = (props) => {
  const [bodyState, setBodyState] = useState({
    someFetch: [],
  });

  return (
    <div id='body'>
      <ItemOuterContainer />
      <div id="placeholder for LoadMoreBtn component, IndividualDisplay may also be a child of this route" />
    </div>
  );
};

export default MainBody;
