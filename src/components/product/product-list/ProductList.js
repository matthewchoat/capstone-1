import React from 'react';
import ProductItem from '../product-item/ProductItem';
import Title from '../../common/Title';
import { useProductState } from '../../../global-state';

export default function ProductList(searchTerm) {
  const { productState } = useProductState();
  const { products } = productState;
  let filteredItem =  'all' || searchTerm;

  let productItems = products.filter(product => filteredItem === 'all' || product.category === filteredItem).map(product => (
    <ProductItem key={product.id} product={product} />
  ));
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="Browse our" title="Boards" />
          <div className="row">{productItems}</div>
        </div>
      </div>


    </>
  );
}
