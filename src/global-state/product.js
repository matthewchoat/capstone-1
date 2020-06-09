import React, { useReducer, createContext, useContext } from 'react';
import { detailProduct } from '../data';
import storeProducts from '../storeProducts.json';
import { useProductActions } from '../actions';
import { SET_PRODUCT_DETAILS } from '../actions/types';

let tempProducts = [];
storeProducts.forEach(item => tempProducts.push({ ...item }));

const initialState = {
  products: tempProducts,
  productDetails: { ...detailProduct }
};

const productReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: action.payload
      };
    default:
      throw new Error('Invalid action type');
  }
};

export const ProductContext = createContext(initialState);

export const useProductState = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const productActions = useProductActions(state, dispatch);
  return (
    <ProductContext.Provider value={{ productState: state, productActions }}>
      {children}
    </ProductContext.Provider>
  );
};
