import React, { useState } from 'react';
import ProductItem from '../product-item/ProductItem';
import Title from '../../common/Title';
import { useProductState } from '../../../global-state';

export default function ProductList() {
  const { productState } = useProductState();
  const { products } = productState;

  const [word, setWord] = useState("");
  const [filterDisplay, setFilterDisplay] = useState(products);

  const handleChange = e => {
    let oldList = products.map(product => { 
      return { title: product.title.toLowerCase() };
    });

    if (e !== "") {
      let newList = [];
      setWord(e);
      newList = oldList.filter(product => 
        product.title.includes(word.toLowerCase())
      );

      setFilterDisplay(newList);
    } else {
      setFilterDisplay(products);
    }
  };

  const productItems = products.map(product => (
    <ProductItem key={product.id} product={product} />
  ));
  return (
    <>
      <div className="py-5">
        <div className="container">
            <div>
                <strong>Search by Name:</strong> <input onChange={e => handleChange(e.target.value)} />
                {filterDisplay.map((product, i) => (
                  <div key={i}>
                    <li>
                      {product.title} &nbsp;
                    </li>
                  </div>
                ))}
              </div>
            <Title name="Welcome to" title="Liquid Longboards" />
            <div className="row">{productItems}</div>
        </div>
      </div>
    </>
  );
}