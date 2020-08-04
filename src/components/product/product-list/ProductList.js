// This will be my default product view
import React from 'react';
import ProductItem from '../product-item/ProductItem';
import Title from '../../common/Title';
import { useProductState } from '../../../global-state';

export default function ProductList() {
  const { productState } = useProductState();
  const { products } = productState;

  const productItems = products.map(product => (
    <ProductItem key={product.id} product={product}  />
  ));

  return (
    <>
      <div className="py-5">
        <div className="container">
 {/* Displaying my main title and rendering product cards */}
              <Title name="Welcome to" title="Liquid Longboards" />
              <div className="row">{productItems}</div>
             
        </div>
      </div>
    </>
  );
 }