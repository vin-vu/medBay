import React, { useState } from 'react';
import ItemOuterContainer from './body/itemOuterContainer.jsx';
// import LoadMoreBtn from './body/loadMoreBtn.jsx';
// import IndividualDisplay from './body/individualDisplay.jsx';

// Render for the main body, return is implied without controlling state
// additional prop drilling to send the array of items to render to ItemOuterContainer
const MainBody = (props) => (
  <div id="body">
    <ItemOuterContainer items={props.items} />
    <div id="placeholder for LoadMoreBtn component, IndividualDisplay may also be a child of this route" />
  </div>
);

export default MainBody;
