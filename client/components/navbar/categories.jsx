import { AddCommentTwoTone } from '@material-ui/icons';
import { Box, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

function Categories(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/categoryList')
      .then((res) => res.json())
      .then((arrOfCategories) => setCategories(arrOfCategories))
      .catch((err) => console.log('There has been a problem with fetching categories ', err));
  }, []);

  // fetch data based on category by attaching specific category as a query parameter to the end of URL
  function getItemByButton(cat) {
    console.log(cat);
    fetch(`api/categoryProducts?Category=${cat}`)
      .then((res) => res.json())
      .then((items) => {
        console.log(items);
        return props.setState(items);
      })
      .catch((err) => console.log('There has been a problem with fetching categories: ', err));
  }
  return (
    <Box display="flex" justifyContent="space_between">
      {
      categories
        .map((category, index) => (
          <Button color="secondary" 
                  variant="contained" 
                  id={category} 
                  key={index} 
                  onClick={() => getItemByButton(category)}
          >
            {category}
          </Button>
        ))
      }
    </Box>
  );
}
export default Categories;
