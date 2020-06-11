import React, { useState } from 'react';
import ProductItem from '../product-item/ProductItem';
import Title from '../../common/Title';
import { useProductState } from '../../../global-state';

export default function SearchList() {
  const { productState } = useProductState();
  const { products } = productState;

  const [word, setWord] = useState("");
  const [filterDisplay, setFilterDisplay] = useState(products);
  const [setSearch, setSearchInput] = useState('')
  const handleChange = e => {
    setSearchInput(e)


    if (e !== "") {
      setWord(e);
      let newList = [];

      products.map(product => {
        const title = product.title.toLowerCase()
        const serial = product.serialnum
          if (title.search(word) !== -1) {
            newList.push(product)
          }
          else if (serial.toString().search(word)!== -1){
            newList.push(product)
          }
          else if (serial.toString().search(word)!== -1){
            newList.push(product)
          }
          else {console.log("nomatch")};
      })

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