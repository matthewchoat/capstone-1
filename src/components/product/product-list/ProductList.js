import React from 'react';
import ProductItem from '../product-item/ProductItem';
import Title from '../../common/Title';
import { useProductState } from '../../../global-state';

export default function ProductList(searchTerm) {
  const { productState } = useProductState();
  const { products } = productState;
  let filteredItem =  'Pre-built Longboard';

  let productItems = products.filter(product => product.category === filteredItem).map(product => (
    <ProductItem key={product.id} product={product} />
  ));
  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="dropdown">
  <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
    Dropdown button
  </button>
  <div className="dropdown-menu">
    <a className="dropdown-item" onClick={() => ProductList('Pre-built Longboard')} href="#">Link 1</a>
    <a className="dropdown-item" href="#">Link 2</a>
    <a className="dropdown-item" href="#">Link 3</a>
  </div>
</div>
          <Title name="Browse our" title="Boards" />
          <div className="row">{productItems}</div>
        </div>
      </div>


    </>
  );
}
