import React, { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const AddToCartButton = styled(Button)({
  background: 'linear-gradient(45deg, #3F9D47 40%, #00d4ff 100%)',
  border: 0,
  borderRadius: 10,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'White',
  height: 36,
  padding: '0 30px',
});

const IndividualDisplay = (props) => (
  <Box
    id={props.key}
    width="20%"
    display="flex"
    flexDirection="column"
    padding="2.5% 2.5%"
  >
    <Box flexGrow="1">
      <img src={props.image} alt="Image Not Found" width="100%" />
    </Box>
    <Box component="span" flexGrow="1" padding="1% 0px" color="primary.main">
      Product:
      {' '}
      {props.title}
    </Box>
    <Box component="span" flexGrow="1" padding="1% 0px" color="text.secondary">
      Description:
      {' '}
      {props.description}
    </Box>
    <Box component="span" flexGrow="1" padding="1% 0px" color="text.secondary">
      Category:
      {' '}
      {props.category}
    </Box>
    <Box component="span" flexGrow="1" padding="1% 0px" color="info.main">
      Quantity:
      {' '}
      {props.quantity}
    </Box>
    <Box component="span" flexGrow="1" padding="1% 0px 2% 0px" color="text.primary">
      Price:
      {' '}
      {props.price}
    </Box>
    <AddToCartButton onClick={props.buttonFunc}>Add To Cart</AddToCartButton>
  </Box>

);

export default IndividualDisplay;
