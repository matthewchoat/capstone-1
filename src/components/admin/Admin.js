import React from 'react';
import AdminItem from '../product/product-item/AdminItem';
import Title from '../common/Title';
import { useProductState } from '../../global-state';

export default function Admin() {
    const { productState } = useProductState();
    const { products } = productState;
  
    let adminItems = products.map(adminProduct => (
      <AdminItem key={adminProduct.id} product={adminProduct} />
    ));
    return (

    <>
      <div className="py-5">
        <div className="container">
            <Title name="Admin" title="Inventory Manager" />
          <div className="row">{adminItems}</div>
        </div>
      </div>
    </>
  );
}
