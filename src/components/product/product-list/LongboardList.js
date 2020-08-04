//This view is similar to my ProductList but filtering the product category to 'Pre-built Longboard'
import React from 'react';
import ProductItem from '../product-item/ProductItem';
import Title from '../../common/Title';
import { useProductState } from '../../../global-state';

export default function LonboardList() {
  const { productState } = useProductState();
  const { products } = productState;
  const filteredItem =  'Pre-built Longboard';

//Filtering and then mapping through each product
  const productItems = products.filter(product => product.category === filteredItem).map(product => (
    <ProductItem key={product.id} product={product} />
  ));

  return (
    <>
      <div className="py-5">
        <div className="container">
{/*displaying our title and filtered product cards*/}
          <Title name="Browse our" title="Complete Longboards" />
          <div className="row">{productItems}</div>
        </div>
      </div>

    </>
  );
}
