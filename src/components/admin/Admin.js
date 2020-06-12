//This is our Admin Inventory Management page
import React from 'react';
import AdminItem from '../product/product-item/AdminItem';
import Title from '../common/Title';
import { useProductState } from '../../global-state';

export default function Admin() {
    const { productState } = useProductState();
    const { products } = productState;

  //show the special "adminItems" products list
    let adminItems = products.map(adminProduct => (
      <AdminItem key={adminProduct.id} product={adminProduct} />
    ));
    return (

  //display the admin inventory products
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
