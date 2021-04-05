import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import IndividualDisplay from './individualDisplay';

// '/api/allProducts'
const ItemOuterContainer = (props) => {

  return (
    <Grid
      container
      display="flex"
      flexwrap="wrap"
      direction="row"
      justify="flex-start"
      alignItems="flex-end"
      id="itemOuterCountainer"
    >
      {props.items}
    </Grid>
  );
};

export default ItemOuterContainer;
