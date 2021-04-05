import { AddCommentTwoTone } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';

function Categories(props) {
  const [itemList, setItemList] = useState([]);

  // useEffect(() => {
  //   const arrOfCategories = [].sort(); // [ “FAK”, “MS”, “PPE”]
  //   function getAllCategories() {
  //     fetch('category_endpoint_placeholder')
  //       .then((res) => res.json())
  //       .then((data) => data.map(category => {
  //         if(!arrOfCategories.contain(category)) arrOfCategories.push(category);
  //       }))
  //       .catch((err) => console.log('There has been a problem with fetching categories ', err));
  //   }
  // });


  // // const divGen = [];
  // function divGenerate(){
  //   for (let i=0; i<array.length; i++){
  //     divGen.push(<div>{array[i]}</div> );
  //   }
  // }
  // // console.log(divGen);

  // const fetchData = (elem) => {
  //   "method": 'POST',
  //   "body": JSON.stringify(elem),
  //   "headers": { 'Content-Type': 'application/json' },
  // };

  const data = [{
    "Title": "Face Shield Visor for Infection Control",
    "Description": "Protects entire face from splatters of liquid. Impact resistant. Anti-fog and anti-static coating on PET material. Easily adjustable angles, comfortable elastic headband.",
    "Category": "PPE",
    "ImageURL": "https://fetchppe.online/u_file/2004/products/07/a8128aca75.jpg.640x640.jpg",
    "Price": 7.99,
    "Quantity": 45
  },
  {
    "Title": "Breathable Bandana With PM2.5 Filters",
    "Description": "Five layers of PM2.5 Carbon filtering, Made of activated carbon and non-woven melt-blown filter cloth, effectively keep away from PM2.5 and a range of airborne contaminants, could protect you from dust, haze, allergies, smoke, pollution, etc.",
    "Category": "PPE",
    "ImageURL": "https://fetchppe.online/u_file/2004/products/30/e733989eff.jpg.640x640.jpg",
    "Price": 15.99,
    "Quantity": 30
  },
  {
    "Title": "Surgical Protective Visor",
    "Description": "Specially coated PET, anti-fog, impact resistant. Easy to wear, adjustable, Comply with ROHS standard and CE lab tested. May be cleaned for re-use, use 75% ethanol alcohol for cleaning.",
    "Category": "PPE",
    "ImageURL": "https://fetchppe.online/u_file/2004/products/08/9251efa42c.jpg.640x640.jpg",
    "Price": 29.99,
    "Quantity": 12
  }]


  return (
    <div>
      {data.map((elem, index) =>
        <div key={index}>{elem.Title}</div>
        // onClick={(elem) => fetchData(elem)
      )}
    </div>
  );
}

export default Categories;
