import React, { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const AddToCartButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'White',
  height: 36,
  padding: '0 30px',
});

const IndividualDisplay = (props) => (
  <div id={props.key}>
    <img src={props.image} alt='Image not Found'/>
    <span>
      Product:
      {' '}
      {props.title}
    </span>
    <span>
      Category:
      {' '}
      {props.category}
    </span>
    <span>
      Description:
      {' '}
      {props.description}
    </span>
    <span>
      Price:
      {' '}
      {props.price}
    </span>
    <AddToCartButton onClick={props.buttonFunc}>Add To Cart</AddToCartButton>
  </div>

);

export default IndividualDisplay;
