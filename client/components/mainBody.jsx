import React, { useState } from 'react';
import ItemOuterContainer from './body/itemOuterContainer.jsx';
// import LoadMoreBtn from './body/loadMoreBtn.jsx';
// import IndividualDisplay from './body/individualDisplay.jsx';

const MainBody = (props) => {
  // console.log(props.items);
  return (
    <div id='body'>
      <ItemOuterContainer items={props.items} />
      <div id="placeholder for LoadMoreBtn component, IndividualDisplay may also be a child of this route" />
    </div>
  );
};

export default MainBody;
