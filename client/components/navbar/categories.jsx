import { AddCommentTwoTone } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';

function Categories(props) {
  const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //     fetch(`category_endpoint_placeholder`)
  //       .then((res) => res.json())
  //       .then((arrOfCategories) => setCategories(arrOfCategories))
  //       .catch((err) => console.log('There has been a problem with fetching categories ', err));
  //   }
  // )

  // fake data for testing - to be deleted once fetch works
  const data = ["FAK" , "PPE", "MS"];

  // fetch data based on category by attaching specific category as a query parameter to the end of URL
  function getItemByButton(category) {
    fetch(`/api/allProducts?${category}`)
      .then((res) => res.json())
      .then((items) => {
        console.log(data);
        return props.setState(items);
      })
      .catch((err) => console.log('There has been a problem with fetching categories: ', err));
  }
  
  return (
    <div>
      {data.map((elem, index) =>
        <div id={elem} key={index} onClick={getItemByButton}>{elem}</div>
      )}
    </div>
  );
}

export default Categories;
