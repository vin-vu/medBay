import React, { useState } from 'react';
import ItemOuterContainer from './body/itemOuterContainer.jsx';
// import LoadMoreBtn from './body/loadMoreBtn.jsx';
// import IndividualDisplay from './body/individualDisplay.jsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

// Render for the main body, return is implied without controlling state
// additional prop drilling to send the array of items to render to ItemOuterContainer
const MainBody = (props) => {
  const classes = useStyles();

  return (
    <div id="body" className={classes.content}>
      <ItemOuterContainer items={props.items} />
      <div id="placeholder for LoadMoreBtn component, IndividualDisplay may also be a child of this route" />
    </div>
  )
};

export default MainBody;
