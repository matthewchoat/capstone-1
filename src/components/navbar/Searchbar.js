import React from 'react';
import ReactSearchBox from 'react-search-box'
import ProductList from '../product-list/ProductList';
import ProductItem from '../product-item/ProductItem';
import Title from '../../common/Title';
import { useProductState } from '../../../global-state';


const { productState } = useProductState();
  const { products } = productState;

export const Filter = ({ value, handleChange }) => {
    return (
        <div>
            filter: <input value={value} onChange={handleChange} />
        </div>
    )
}