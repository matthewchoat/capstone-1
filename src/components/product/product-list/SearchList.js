//This is my search component
import React, { useState } from 'react';
import ProductItem from '../product-item/ProductItem';
import Title from '../../common/Title';
import { useProductState } from '../../../global-state';

export default function SearchList() {
//pulling in product state
  const { productState } = useProductState();
  const { products } = productState;

//setting variables for search function
  const [word, setWord] = useState("");
  const [filterDisplay, setFilterDisplay] = useState(products);
  const [setSearch, setSearchInput] = useState('')
  const handleChange = e => {
    setSearchInput(e)

//make sure search bar is not empty
    if (e !== "") {
      setWord(e);
      let newList = [];

//mapping products and declaring title and serial variables
      products.map(product => {
        const title = product.title.toLowerCase()
        const serial = product.serialnum
        
        //if the searched word belongs to any title, manufacturer, or size, push the new product list
          if (title.search(word) !== -1) {
            newList.push(product)
          }
        //if the searched word contains a matching serial number, push the new product list 
          else if (serial.toString().search(word)!== -1){
            newList.push(product)
          }
          else {console.log("nomatch")};
      })
      //define the display for either the new list or the original product list
      setFilterDisplay(newList);
    } else {
      setFilterDisplay(products);
  }};

  return (
    <>
      <div className="py-5">
        <div className="container">
              <Title name="Your Search" title="is our Desire" />
            <p><strong>Search by Name, Category, Serial Number, Size, or Manufacturer: </strong>
            <input placeholder="Search for anything!" onChange={e => handleChange(e.target.value)} /></p>
                {filterDisplay.map((product, i) => (
                  <div key={i}>
                    <ProductItem key={product.id} product={product}  />
                  </div>
                ))}
        </div>
      </div>
    </>
  );
 }