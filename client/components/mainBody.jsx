import React, { useState } from 'react';
import * as ItemOuterContainer from './body/ItemOuterContainer';
import * as LoadMoreBtn from './body/LoadMoreBtn';
import * as IndividualDisplay from './body/IndividualDisplay';

const MainBody = (props) => {
  const [bodyState, setBodyState] = useState({

  });
  return (
    <section>
      <div id="placeholder for ItemOuterContainer component, IndividualDisplay will be a child of this route" ></div>
      <div id="placeholder for LoadMoreBtn component, IndividualDisplay may also be a child of this route"></div>
    </section>
  );
};

export default MainBody;