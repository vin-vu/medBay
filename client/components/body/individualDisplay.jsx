import React, { useState } from 'react';

export default function IndividualDisplay(props) { 
  // <div id="placeholder for individual listings rendering" />
  function createItemCard(product) {
    // const { product } = item;
    console.log(product);
    // const description = item.Description
    // return description;
  }

  return (
    <div>
      <div>{createItemCard(props.product)}</div>
    </div>
  )
}


