import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

// Render of the ItemOuterContainer, return is implied without controlling state
// Utilizes the Grid configuration of react/material ui
// Orgnanizes and renders the array of IndividualDisplay component elements
// State is managed at the App level, please reference App.jsx to understand the listings
const ItemOuterContainer = (props) => (
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

export default ItemOuterContainer;
