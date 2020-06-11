import React from 'react';
import ProductItem from '../product-item/ProductItem';
import Title from '../../common/Title';
import { useProductState } from '../../../global-state';

export default function LonboardList() {
  const { productState } = useProductState();
  const { products } = productState;
  const filteredItem =  'Pre-built Longboard';

  const productItems = products.filter(product => product.category === filteredItem).map(product => (
    <ProductItem key={product.id} product={product} />
  ));

  return (
    <>
      <div className="py-5">
        <div className="container">

          <Title name="Browse our" title="Complete Longboards" />
          <div className="row">{productItems}</div>
        </div>
      </div>

    </>
  );
}
