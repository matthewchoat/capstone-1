import React, { useReducer, createContext, useContext } from 'react';
import {
  ADD_ITEM_TO_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  ADD_TOTALS,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART
} from '../actions/types';
import { usePackActions } from '../actions';
import { useProductState } from './product';

const initialState = {
  pack: [],
  subtotal: 0,
  tax: 0,
  total: 0
};

const packReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        pack: action.payload
      };
    case INCREMENT_ITEM:
      return {
        ...state,
        pack: action.payload
      };
    case DECREMENT_ITEM:
      return {
        ...state,
        pack: action.payload
      };
    case ADD_TOTALS: {
      const { subtotal, tax, total } = action.payload;
      return {
        ...state,
        subtotal,
        tax,
        total
      };
    }
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        pack: action.payload
      };
    case CLEAR_CART:
      return initialState;
    default:
      throw new Error('Invalid action type');
  }
};

export const PackContext = createContext(initialState);

// Custom hook for using pack context
export const usePackState = () => {
  return useContext(PackContext);
};

export const PackProvider = ({ children }) => {
  const [state, dispatch] = useReducer(packReducer, initialState);
  const { productState } = useProductState();
  const packActions = usePackActions(
    { productState, packState: state },
    dispatch
  );
  return (
    <PackContext.Provider value={{ packState: state, packActions }}>
      {children}
    </PackContext.Provider>
  );
};
