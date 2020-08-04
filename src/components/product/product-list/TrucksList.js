//This view is similar to my ProductList but filtering the product category to 'trucks'
import React from 'react';
import ProductItem from '../product-item/ProductItem';
import Title from '../../common/Title';
import { useProductState } from '../../../global-state';

export default function TrucksList() {
  const { productState } = useProductState();
  const { products } = productState;
  const filteredItem =  'Trucks';

  const productItems = products.filter(product => product.category === filteredItem).map(product => (
    <ProductItem key={product.id} product={product} />
  ));
  return (
    <>
      <div className="py-5">
        <div className="container">

          <Title name="Browse our" title="Trucks" />
          <div className="row">{productItems}</div>
        </div>
      </div>
    </>
  );
}
